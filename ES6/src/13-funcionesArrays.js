let data = [
    { id: 1, name: 'Eduardo', age: 30 },
    { id: 2, name: 'Pamela', age: 25 },
    { id: 3, name: 'Susana', age: 17 }
];
// data.forEach(x => x.canVote = x.age >= 21);
data = data.map(x => ({...x, canVote: x.age >= 21 }));
// console.log(data);


const productos = [
    { nombre: 'Ordenador PC', precio: 599, departamento: 'Tecnologia' },
    { nombre: 'Sartenes Verdes', precio: 37, departamento: 'Hogar' },
    { nombre: 'Reloj Calculadora', precio: 75, departamento: 'Tecnologia' },
    { nombre: 'Maquina de Palomitas', precio: 33, departamento: 'Hogar' },
    { nombre: 'Mueble TV', precio: 123, departamento: 'Hogas' },
    { nombre: 'Tuppers', precio: 12, departamento: 'Hogas' },
]



// find() devuelve item que corresponde a la condicion que pasemos
// pero para la busqueda una vez encuentre que se cumpla la primera vez
const muebleTV = productos.find(item => {
    // return item.nombre === 'Mueble TV'
    return (/Mueble/g).test(item.nombre);
});
// console.log(muebleTV)




// map() me recorre todo el array y devuelve un array
// con los nuevos objetos generados
// hay que tener cuidado de no modificar el objeto original
const productosIVA = productos.map(item => {
    let nuevoPrecio = item.precio + item.precio * 0.21;
    return {...item, precio: nuevoPrecio };
    // De esta manera generamos un nuevo objeto sin modificar el original
});
// console.log(productosIVA)
// console.log(productos)




// filter() nos permite recuperar un nuevo array con 
// los elemento que cumplan con el filtro que le especificamos
const productosHogar = productos.filter(item => {
    return item.departamento === 'Hogar';
});
// console.log(productosHogar);




// every() permite mediante una condicion aplicarsela 
// a todos los elementos del array.
// Si todos cumplen con esa condicion nos devuelve true 
// si alguno no cumple returna false
const check = productos.every(item => {
    return item.precio >= 10;
});
// console.log(check)




// some() si alguno de ellos cumple con la condicion 
// nos retorna true
const alguno = productos.some(item => {
    return item.precio > 12500;
});
// console.log(alguno)




// reduce() nos permite hacer cálculos a partir de ciertos 
// valores de los elementos contenidos en el array
// recibe el total donde se iran guardando los valores y el item que va ir pasando
// y se pasa el valor sobre cual va iniciar
const precioTotal = productos.reduce((total, item) => {
    return total + item.precio
}, 0);
console.log(precioTotal)