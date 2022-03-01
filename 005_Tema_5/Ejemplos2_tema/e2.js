function convertirMaysculas(event) {
    let elemento = event.target;
    elemento.value = elemento.value.toUpperCase();
}


function iniciarEventos(event) {
    let nombre = document.getElementById("nombre");
    let apellido1 = document.getElementById("apellido1");
    let apellido2 = document.getElementById("apellido2");

    nombre.addEventListener("blur", convertirMaysculas);
    apellido1.addEventListener("blur", convertirMaysculas);
    apellido2.addEventListener("blur", convertirMaysculas);
}
document.addEventListener("DOMContentLoaded", iniciarEventos)