// Nos permite recibir a una funcion un numero indefinido de datos
// y los guarda en un arreglo ...datos -> []

const mostrarDatos = (...datos) => {

    console.log(datos);
}

mostrarDatos('Daniel', 27, 'daniel@daniel.com', 'Colombia')