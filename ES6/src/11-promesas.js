// Nos permite esperar a que sucesada algo y 
// dependiendo si sucede o no voy hacer algo

const promesa = new Promise((resolve, reject) => {

    setTimeout(() => {
        const exito = false;
        exito ? resolve('La operacion tuvo exito') : reject('La operacion fue rechazada');
    }, 3000);

});

promesa.then((mensaje) => {
    alert(mensaje)
});

promesa.catch((mensaje) => {
    alert(mensaje);
})