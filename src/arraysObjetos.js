const colors = ['red', 'blue', 'orange', 'green', 'black', 'purple'];


// concat()
const newColors = ['gray', 'yellow'];
// const concat = colors.concat(newColors);
const concat = [...colors, ...newColors, ...['white']]
    // console.log(concat);



// SLICE() PARA SELECCIONAR
// slice() recibe dos argumentos el inicio y final-1 y los toma.
// No modifica el arreglo original.
// Si no se pasa el segundo argumento toma todos los valores
// iniciando desde el primer argumento.
/* const newColors = colors.slice(0, 2);
console.log(newColors);
console.log(colors); */


// SPLICE() PARA REMOVER
// splice() recibe como primer argumento el indice desde donde va a eliminar
// el segundo item cuatos items quiere eliminar
// si no se pasa el segundo argumento borrar todo desde el indice que se pase en adelante
// muta el arreglo original
/* console.log(colors);
const newColors = colors.splice(2, 2);
console.log(newColors);
 */


// includes()
// console.log(colors.includes('yellow'));


const users = [
    { name: 'Daniel', age: 27 },
    { name: 'Valentina', age: 21 },
    { name: 'Victor', age: 22 },
    { name: 'Maria', age: 45 },
    { name: 'Jose', age: 16 },
    { name: 'July', age: 18 },
];
// console.log(users);


// Object.entries(var)
// Me separa cada llave: valor en un array diferente
// todo dentro de otro array
// Object.fromEntries(var) reversa el anterio 
/* const user = users[0];
const entries = Object.entries(user);
console.log(Object.fromEntries(entries)); */




// some() -> (||)
// Devuelve true si alguno de los elementos cumple la condición
/* const hasKids = users.some(user => user.age < 18);
console.log(hasKids); */



// every() -> (&&)
// Devuelve true si todos los elementos cumple la condición
/* const areAllTeenages = users.every(user => user.age < 18);
console.log(areAllTeenages); */



// reduce()
/* const keysUser = users.reduce((acc, user) => {

    if (user.age < 22) { return acc; }

    acc[user.name] = user
    return acc;
}, {})
console.log(keysUser); */



// map()
/* const names = users.map(user => {
    return {
        ...user,
        description: `${user.name} is ${user.age} years old`
    }
});
console.log(names); */


// findIndex()
// si no encuentra nada devuelve -1
/* const findUser = users.findIndex(user => user.name === 'Jose');
console.log(findUser); */


// find()
// si no encuentra nada devuelve undefind
/* const findUser = users.find(user => user.name === 'Camilo');
console.log(findUser); */


// filter()
// si no encuentra nada devuelve un array vacion []
/* const userFiltred = users.filter(user => user.age < 24);
console.log(userFiltred); */


// for ... in
/* const user = users[0];
for (userProp in user) {
    console.log(userProp, user[userProp]);
} */


// for ... of
/* for (user of users) {
    console.log(user);
} */


// const nextLarger = (a) => {
//     // console.log('INGRESO FUNCION');

//     const res = [];
//     for (let i = 0; a.length; i++) {
//         let currNum = a[i];
//         for (let n = i; n < a.length; n++) {
//             if (a[n] > currNum) {
//                 res.push(a[n]);
//                 // console.log('INGRESO IF');
//                 console.log(res);
//                 break;
//             } else if (n === a.length - a) {
//                 res.push(-1);
//             }
//         }
//     }

//     return res;
// };

// nextLarger([6, 7, 3, 8]);

function makeArrayConsecutive2(statues) {
    var sorted = statues.sort((a, b) => a - b);
    var full = sorted[sorted.length - 1] - sorted[0] + 1;
    return full - sorted.length;
}

// console.log(makeArrayConsecutive2([6, 2, 3, 8]));


for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000 + i);
    console.log(i);

}