var ventana1;

function unidad3() {
    abrirVentana(ventana1, "Ventana abierta, cierrela primero!!.");
    ventana1.setTimeout(datosVentana, 5000);

}

function existeVentana(ventana) {
    if ((ventana == null) || (ventana.closed)) {
        return false;
    } else {
        return true;
    }

}

function abrirVentana(ventana, msg_error) {
    if (!existeVentana(ventana)) {
        ventana = window.open("", "ventana", "width=500,height=500");

    } else {
        alert(msg_error);
    }

}

function datosVentana() {

    ventana1.document.write("<h3>Datos ventana</h3>");

}

function pruebas() {
    ventana1.document.write("<h1>Datos ventana</h1>");

}