class Clase {

    constructor(piso, numero) {
        this.piso = piso;
        this.numero = numero;
        this.alumnos = [];
    }

    anadirAlumno(alumno) {
        console.log("añadir alumnos");
        this.alumnos.push(alumno);

    }

    anadirAlumnos(alum) {
        console.log("añadir alumnos");
        alum.foreach((item, index, Obj) => {
            this.alumnos.push(item);
        });



    }

    mostrarAlumnos() {
        console.log("estoy en mostar alumno");
        for (let i = 0; i < aula.alumnos.length(); i++) {
            let td = document.createElement("td");
            console.log(aula.alumnos[i].imprimirDatos());
            td.innerHTML = aula.alumnos[i].imprimirDatos();
            let tr = document.getElementById("pupitres");
            tr.appendChild(td);
        }
        //this.alumnos.forEach((valor, key, arr) => {
        //  let td = document.createElement("td");
        //td.innerHTML = valor;
        //document.getElementById("pupitres").appendChild(td);
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

let a1 = new alumno("cesar", "bouzas", 34896415);
let a2 = new alumno("cesar", "bouzas", 34896415);
let a3 = new alumno("cesar", "bouzas", 34896415);
let aula = new Clase();
aula.anadirAlumno(a1);
aula.anadirAlumno(a2);
aula.anadirAlumno(a3);

let btn = document.getElementById("btn");
btn.addEventListener("click", aula.mostrarAlumnos);