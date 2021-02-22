const crearObjeto = (nombre, edad) => {
    return {
        nombre,
        edad,
        mostrarInfo: () => {
            return `${nombre} tiene ${edad} años`;
        }
    }
}

console.log(crearObjeto('Daniel', 27).mostrarInfo());