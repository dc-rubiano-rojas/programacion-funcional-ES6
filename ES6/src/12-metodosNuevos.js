const texto = 'Hola mundo!';


console.log(texto, 'empieza con a: ', texto.toLocaleLowerCase().startsWith('h'));

console.log(texto, 'termina con o: ', texto.toLocaleLowerCase().endsWith('o'));

console.log(texto, 'incluye la palabra daniel?', texto.includes('daniel'));

// =========================================================================

const amigos = ['Alejandra', 'Diego', 'Juan', 'Carlos', 'Alejandro'];

console.log('incluye la palabra daniel?', amigos.includes('Daniel'));



// Encuentra el primer elemento que cumpla esta condicion
console.log(amigos.find((amigo) => amigo.length > 6));



// Devuelve un arreglo con los elementos que cumpla esta condicion
console.log(amigos.filter((amigo) => amigo.length > 6));



// Si el resultado es -1 quiere decir que lo que estamos 
// buscando no se encuentra en el arreglo
console.log(amigos.findIndex((amigo) => amigo === 'Juan'));