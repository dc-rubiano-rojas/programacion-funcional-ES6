// Nos permite enviarlos apartir de un arreglo

const mostrarDatos = (...datos) => {
    console.log(datos);
}

const arregloDatos = ['Daniel', 27, 'daniel@daniel.com', 'Colombia'];

mostrarDatos(...arregloDatos);