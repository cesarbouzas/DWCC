document.addEventListener("DOMContentLoaded", ready)
let ncol = 0;
let nfil = 0;

function asignarCol() {
    ncol = +col.value;
    console.log(ncol);
    if (nfil == 0) {
        crearTabla(ncol, 1);
    } else {
        crearTabla(ncol, nfil);
    }
};

function asignarFil() {
    nfil = +fil.value;
    console.log(nfil);
    if (ncol == 0) {
        crearTabla(1, nfil);
    } else {
        crearTabla(ncol, nfil);
    }

};




function ready() {

    let col = document.getElementById("col");
    let fil = document.getElementById("fil");
    col.addEventListener("change", asignarCol);
    fil.addEventListener("change", asignarFil);
    console.log(ncol, nfil);
    crearTabla(ncol, nfil);
}

function crearTabla(col, fil) {
    borrarTablas();
    let tabla = document.createElement("table")
    let cuerpo = document.getElementsByTagName("body")[0]
    cuerpo.appendChild(tabla)
    for (let i = 0; i < fil; i++) {
        let fila = document.createElement("tr")

        for (let j = 0; j < col; j++) {
            let columna = document.createElement("td")
            fila.appendChild(columna)
        }
        tabla.appendChild(fila)

    }

}

function borrarTablas() {
    let ntablas = document.getElementsByTagName("table").length;
    if (ntablas > 0) {
        for (let i = 0; i < ntablas; i++) {
            document.getElementsByTagName("table")[i].remove;
        }

    }

}