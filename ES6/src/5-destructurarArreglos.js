const persona = ['Daniel', '27', 'Colombia'];

const [nombre, , pais, profesion = 'No existe'] = persona;

// console.log(pais);

const mostrarInfo = ([nombre, , pais, profesion = 'No especificado']) => console.log(nombre, pais, profesion);

mostrarInfo(persona);