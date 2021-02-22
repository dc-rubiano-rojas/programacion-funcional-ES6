// Progrma que me deja multiplicar dos numeros sin usar '*'
const multiplicar = (a, b) => {
        let resultado = 0;
        const positivo = Math.abs(b) == b;

        for (let i = 0; i < Math.abs(b); i++) {
            resultado = positivo ? resultado + a : resultado - a;
        }
        return resultado
    }
    // console.log(multiplicar(2, 3));


// Hacer que un arreglo se sume en una sola iteracion
const arreglo = (funcion) => {
    return funcion.reduce((acc, el) => acc + el)
}

console.log(arreglo([1, 4, 5, 5]));



// Reversar un string
const palabraAlrevez = (string) => [...string].reverse().join('').toLowerCase();
// console.log(palabraAlrevez('Hola soy Camilo'));