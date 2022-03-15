console.log(document.getElementById("nombre").value);
let nombre = document.getElementById("nombre").value;
let apellidos = document.getElementById("apellidos").value;


let formulario = document.getElementById("form");
formulario.addEventListener(submit, mostrar);




function mostarNombre() {

    return `El nombre es ${nombre} y los apellidos son ${apellidos}`;
}

function mostrar() {
    document.getElementById("resultado").innerHTML = mostarNombre();

}