let nombre = document.getElementById("nombre");
let apellidos = document.getElementById("apellidos");


let formulario = document.getElementById("form");
formulario.addEventListener(submit, mostrar);




function mostarNombre() {

    return `El nombre es ${nombre} y los apellidos son ${apellidos}`;
}

function mostrar() {
    document.getElementById("resultado").innerHTML = mostarNombre();

}