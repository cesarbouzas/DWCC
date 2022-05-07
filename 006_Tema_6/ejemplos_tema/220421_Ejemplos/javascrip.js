document.addEventListener("DOMContentLoaded", ready)



function ready() {
    console.log("vamos")
    crearTabla(30, 30)
}

function crearTabla(fil, col) {

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