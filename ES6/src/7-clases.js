class Usuarios {

    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    mostrarSaludo(mensaje) {
        return mensaje;
    }

    mostrarInfo() {
        return `Nombre: ${this.nombre}<br>
                edad: ${this.edad} años
                <hr>`
    }
}

class Estudiente extends Usuarios {


    constructor(nombre, edad, carrera) {
        super(nombre, edad);
        this.carrera = carrera
    }

    mostrarInfo() {
        return `Nombre: ${this.nombre}<br>
                edad: ${this.edad} años<br>
                carrera: ${this.carrera}
                <hr>`
    }
}



const daniel = new Usuarios('Daniel C.', 24);
document.write(daniel.mostrarInfo());

const camilo = new Estudiente('Camilo', 23, 'Ingeniero');
document.write(camilo.mostrarInfo());