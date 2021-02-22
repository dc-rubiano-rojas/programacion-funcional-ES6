//================================RECURSIVIDAD=============================================
const conteoRegresivo = (numero) => {

        if (numero < 0) { return; }
        console.log(numero);
        conteoRegresivo(numero - 1)
    }
    // conteoRegresivo(10)


const metodoQueHace = (x) => {

        if (x < 3) { return x; }
        return metodoQueHace(x - 1) * metodoQueHace(x - 2);
    }
    // console.log(metodoQueHace(5));
    // ========================================================================================


//================================TRAMPOLINES=============================================
// Nos sirve para evitar el error maximum call...
const trampoline = fn => (...args) => {
    let result = fn(...args)
    while (typeof result === 'function') {
        result = result()
    }
    return result;
}

const suma = (number, sum = 0) => (
    number === 0 ?
    sum :
    () => suma(number - 1, sum + number)
)

const tsuma = trampoline(suma);
const r = tsuma(10000000)
    // console.log(r);
    // ========================================================================================



//================================CLOSURES=================================================
// Son la combinación de una función y el alcance lexico que tiene estas
// Se crea al momento de nosotros ejecutar una función que es mas que nada
// a las variables que esta funcion puede acceder tanto dentro de la funcion
// como en un contexto mas arriba

// const x = "Fluffy";
// const f = () => {
//     const y = 'Kins';
//     console.log(x, y);
// }
// f()

require('isomorphic-fetch');

const crudder = dominio => recurso => {
    const url = `${dominio}/${recurso}`;

    return ({
        create: (x) => fetch(url, {
            method: 'POST',
            body: JSON.stringify(x)
        }).then(x => x.json()),
        get: () => fetch(url).then(x => x.json())
    })
}

const Base = crudder('https://jsonplaceholder.typicode.com');
const Todos = Base('todos');

Todos.get().then(x => console.log(x[0]));


// ========================================================================================