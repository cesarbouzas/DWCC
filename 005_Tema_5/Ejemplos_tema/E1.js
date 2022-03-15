function imprimir() {

    let nombre = document.getElementById("nombre").value;
    let apellido1 = document.getElementById("apellido1").value;
    let apellido2 = document.getElementById("apellido2").value;
    console.log(nombre);
    console.log(apellido1);
    console.log(apellido2);
}


//console.log(document.forms[0].elements[0].value); // deberia ser el valor del nombre
let formulario = document.getElementById("formulario");
formulario.addEventListener(submit, imprimir);