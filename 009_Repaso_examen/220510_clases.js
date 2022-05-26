class Clase {

    constructor(piso, numero) {
        this.piso = piso;
        this.numero = numero;
        this.alumnos = new Array();
    }

    anadirAlumno(alumno) {
        this.alumnos.push(alumno);

    }
    mostrarAlumnos() {
        for (let i = 0; i < this.alumnos.length; i++) {
            let td = document.createElement("td");
            console.log(this.alumnos[i].imprimirDatos());
            td.innerTEXT = this.alumnos[i].imprimirDatos();
            let tr = document.getElementById("pupitres");
            tr.appendChild(td);
        }

    }

}

class alumno {
    constructor(nom, ape, dni) {
        this.nombre = nom;
        this.apellido = ape;
        this.dni = dni;

    }
    imprimirDatos() {
        return this.nombre;
    }
}


let a1 = new alumno("César", "bouzas", 34896415);
let a2 = new alumno("Manuel", "bouzas", 34896415);
let a3 = new alumno("Mateo", "bouzas", 34896415);
let aula = new Clase(1, 1);
aula.anadirAlumno(a1);
aula.anadirAlumno(a2);
aula.anadirAlumno(a3);

document.addEventListener("DOMContentLoaded", ready);

function ready() {
    let btn = document.getElementById("pintar");
    btn.addEventListener("click", aula.mostrarAlumnos);
}