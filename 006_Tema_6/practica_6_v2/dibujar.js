document.addEventListener("DOMContentLoaded", ready);
let ncol = 0;
let nfil = 0;
PINTANDO = false;
COLOR = null;




function ready() {
    escucharInputs();
    generarTablaDibujo(col, fil);
    generarCambioColor();
    generarEstadodePincel();
}

function escucharInputs() {
    let col = document.getElementById("col");
    let fil = document.getElementById("fil");
    col.addEventListener("change", asignarCol);
    fil.addEventListener("change", asignarFil);
}

function asignarCol() {
    ncol = +col.value;

    if (nfil == 0) {
        generarTablaDibujo(ncol, 1);
    } else {
        generarTablaDibujo(ncol, nfil);
    }
};

function asignarFil() {
    nfil = +fil.value;
    if (ncol == 0) {
        generarTablaDibujo(1, nfil);
    } else {
        generarTablaDibujo(ncol, nfil);
    }

};

function generarTablaDibujo(col, fil) {

    borrarTablas();
    let zonaDibujo = document.getElementById("zonadibujo")
    let table = document.createElement("table")
    table.classList.add("tablerodibujo")
    zonaDibujo.appendChild(table)
    for (let i = 0; i < fil; i++) {
        //crear tr
        let fila = document.createElement("tr")
        table.appendChild(fila)
        for (let j = 0; j < col; j++) {
            let col = document.createElement("td")
            col.classList.add("tablerodibujo")
            fila.appendChild(col)
            col.id = `celda=${(i*fil)+j+1}`
            col.addEventListener("mouseover", pintar);

        }
        table.appendChild(fila)
            //Cerraar td y añadir tabla
    }

}

function generarCambioColor() {
    let colores = document.getElementById("paleta").
    getElementsByTagName("tr")[0].
    getElementsByTagName("td")

    for (let i = 0; i < colores.length; i++) {
        colores[i].addEventListener("click", cambioColor)
    }

}

function cambioColor(ev) {

    document.getElementsByClassName("seleccionado")[0].classList.remove("seleccionado") //solo puede uno
    COLOR = ev.target.className;
    ev.target.classList.add("seleccionado")


}

function generarEstadodePincel() {
    let tableroDibujo = document.getElementsByClassName("tablerodibujo")[0];
    tableroDibujo.addEventListener("click", cambioEstadoPincel);

}

function cambioEstadoPincel(ev) {
    PINTANDO = PINTANDO ? false : true;
    document.getElementById("pincel").innerHTML = PINTANDO ? "Pincel activo" : "Pincel desactivado";
    if (ev.target.tagName == "TD") {
        pintar(ev)
    }
}

function pintar(ev) {
    if (PINTANDO) {

        removeClassByPrefix(ev.target, "color");
        ev.target.classList.add(COLOR);
    }


}

function removeClassByPrefix(el, prefix) {
    var regx = new RegExp('\\b' + prefix + '.*?\\b', 'g');
    el.className = el.className.replace(regx, '');
    return el;
}

function borrarTablas() {
    let ntablas = document.getElementById("zonadibujo").getElementsByTagName("table");
    console.log(ntablas.length);
    if (ntablas.length > 0) {
        for (let i = 0; i < ntablas.length; i++) {
            ntablas[i].remove();
        }

    }

}