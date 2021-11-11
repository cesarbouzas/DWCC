var ventana;

function unidad3() {
    abrirVentana("Ventana abierta, cierrela primero!!");
    ventana.setTimeout(datosVentana, 5000);

}

function existeVentana() {
    if ((ventana == null) || (ventana.closed)) {
        return false;
    } else {
        return true;
    }

}

function abrirVentana(msg_error) {
    if (!existeVentana()) {
        ventana = window.open("", "ventana", "width=500,height=500");

    } else {
        alert(msg_error);
    }

}

function datosVentana() {

    ventana.document.write("<h3>Datos ventana</h3>");

}

function pruebas() {
    ventana.document.write("<h1>Datos ventana</h1>");

}