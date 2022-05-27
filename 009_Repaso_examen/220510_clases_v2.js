class Clase {

    constructor(piso, numero) {
        this.piso = piso;
        this.numero = numero;
        this.alumnos = new Array();
    }

    anadirAlumno(alumno) {
        this.alumnos.push(alumno);
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




function mostrarAlumnos() {

    if (aula.alumnos.length == 0) {
        aula.anadirAlumno(a1);
        aula.anadirAlumno(a2);
        aula.anadirAlumno(a3);
    } else {

        borrarAlumnos();



    }
    let tr = document.getElementById("pupitres");
    for (let i = 0; i < aula.alumnos.length; i++) {
        let td = document.createElement("td");
        console.log(aula.alumnos[i].imprimirDatos());
        td.innerHTML = aula.alumnos[i].imprimirDatos();
        tr.appendChild(td);
    }

}

function borrarAlumnos() {
    let l = aula.alumnos.length
    for (let i = 0; i < l; i++) {
        aula.alumnos.pop();
        document.table.tr.removechild();

    }



}

function borrarAlumnos2() {
    aula.alumnos.remove();
}

document.addEventListener("DOMContentLoaded", ready);
let a1 = new alumno("César", "bouzas", 34896415);
let a2 = new alumno("Manuel", "bouzas", 34896415);
let a3 = new alumno("Mateo", "bouzas", 34896415);
let aula = new Clase(1, 1);

function ready() {
    let btn = document.getElementById("pintar");
    btn.addEventListener("click", mostrarAlumnos);

}
let tabla = document.getElementsByTagName("table")[0];
tabla.setAttribute("border", "1");
tabla.setAttribute('margin', '10');