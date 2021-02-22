const nombres = ['Daniel', 'Valentina', 'Camila', 'Victor'];

/* const numero_caracteres = nombres.map(nombre => {
    return `${nombre} tiene ${nombre.length} letras de caracteres`;
}) */


// Cuando ubica la funcion flecha en una sola linea puedo omitir el return y los {}
const numero_caracteres = nombres.map(nombre => `${nombre} tiene ${nombre.length} letras de caracteres`);

console.log(numero_caracteres);