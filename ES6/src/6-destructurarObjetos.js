const usuario = {
    nombre: 'Daniels',
    correo: 'email.com',
    edad: 12,
    pais: 'Colombia',
    profesion: 'Ingeniero'
}

const { nombre, pais, profesion = 'No dicha' } = usuario;

// console.log(profesion);

const mostrarInfo = ({ nombre, pais, profesion = 'Estudiante' }) => console.log(`${nombre} es de ${pais}`);

mostrarInfo(usuario);