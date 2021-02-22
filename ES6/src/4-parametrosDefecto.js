function registrarUsuario(nombre, pais = 'No dicho', correo, telefono = 'No dado') {
    return `Nombre: ${nombre}, pais: ${pais}, correo: ${correo}, telefono:${telefono}`;
}

console.log(registrarUsuario('Daniel', undefined, 'daniel@dan.com', 123));