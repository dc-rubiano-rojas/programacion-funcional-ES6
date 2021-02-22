//=====Caracteristica #1=====
// var -> permite redeclarar variable
// var nombre = "Daniel Rubiano";
// var nombre = "Rubiano";

// let y const-> no permite redeclarar la variable
// let pais = "Colombia";
// const apellidos = "Rubiano Rojas";

// console.log('Hola', pais);



//=====Caracterisctica #2=====
// let y const tambien tienen un scope: en el que no podemos acceder a las variables
// creadas dentro de una funcion
/* function saludo() {
    let nombre = "Daniel";
    return 'Hola ' + nombre;
} */
// console.log(saludo());
// console.log(nombre);



//=====Caracteristica #3=====
// let y const tienen un scope de tipo bloque. var NO!
// Esto quiere decir que todas las variables dentro de un bloque (if o for o cualquier bucle)
// van a estar protegidas

/* let edad = 18;

if (edad >= 18) {
    var esAdulto = true; // Se puede acceder desde fuera del if
    let esAdulto2 = true; // No se puede acceder desde fuera del if
    const esAdulto3 = true; // No se puede acceder desde fuera del if
}

console.log(esAdulto3); */




//=====Caracteristica #4=====
// const lo usamos cuando queremos que el valor de una variable nunca cambie
// let permite cambiar el valor. const NO

/* let nombre = "Daniel";
nombre = "Camilo"; */

const colores = ['Rojo', 'Verde'];
colores.push('Azul');

console.log(colores);



// var -> ya no se usa
// const -> Cuando no se quiere cambiar el valor de esa variable
// let -> Cuando se requiree cambiar el valor de esa variable