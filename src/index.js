//================================reduce()=============================================
// metodo que permite ejecutar funciones reducer.
// Una funcion de reducer recibe dos argumentos:
// 1. Es el valor que esta siendo acumulado
// 2. Elemento que se esta iterando del arreglo
// devuelve el nuevo elemento que se esta acumulando

// const reducido = [].reduce((acc, el) => acc + el, 0);

const numeros = [1, 2, 3, 4, 5];
const resultado = numeros.reduce((acc, el) => acc + el, 0);
// console.log(resultado);


const mascotas = [
    { nombre: 'Puchichi', edad: 12, tipo: 'perro' },
    { nombre: 'Chanchito feliz', edad: 3, tipo: 'perro' },
    { nombre: 'Pulga', edad: 10, tipo: 'perro' },
    { nombre: 'Pelusa', edad: 12, tipo: 'gato' },
]
const indexed = mascotas.reduce((acc, el) => ({
    ...acc,
    [el.nombre]: el
}), {});
// console.log(indexed['Puchichi']);



const anidado = [1, [2, 3], 4, [5]];
const plano = anidado.reduce((acc, el) => acc.concat(el), []);
// console.log(plano);
// ================================================================================





//================================map()=============================================
// Nos permite transformar lo elementos de un arreglo.
// Toma un arreglo y nos devuelve otro arreglo con la misma
// longitud del original pero con todos los elementos modificados.

// const numeros = [1, 2, 3, 4, 5];

// const multiplicados = numeros.map(x => x * 2);
// console.log(multiplicados);

// const parejas = numeros.map(x => [x, x]);
// console.log(parejas);

/* const mascotas = [
    { nombre: 'Puchichi', edad: 12, tipo: 'perro' },
    { nombre: 'Chanchito feliz', edad: 3, tipo: 'perro' },
    { nombre: 'Pulga', edad: 10, tipo: 'perro' },
    { nombre: 'Pelusa', edad: 12, tipo: 'gato' },
] */

const edades = mascotas.map(animal => animal.edad);
// console.log(edades);

const suma = edades.reduce((acc, el) => {
    acc += el;
    return acc;
}, 0);
// console.log(`El suma de edad es: ${suma/edades.length}`);
// ================================================================================






// ===========================filter()==========================================
// El objetivo de filter es crear un arreglo de igual o menor 
// cantidad de elementos que el arreglo que nosotros estamos trabajando.
// Nos devuelve una nueva copia del arreglo.

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const numerosFiltrados = numeros.filter(x => x < 5);
// console.log(numerosFiltrados, numeros)

/* const mascotas = [
    { nombre: 'Puchichi', edad: 12, raza: 'perro' },
    { nombre: 'Chanchito feliz', edad: 3, raza: 'perro' },
    { nombre: 'Pulga', edad: 10, raza: 'perro' },
    { nombre: 'Pelusa', edad: 16, raza: 'gato' },
] */


const perros = mascotas.filter(animal => animal.raza == 'perro');
const gatos = mascotas.filter(animal => animal.raza == 'gato');

// console.log(perros);
// console.log(gatos);
// console.log(mascotas)
//=================================================================================