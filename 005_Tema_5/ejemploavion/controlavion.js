function manjearAltitud(event) {
    let elemento = event.target;
    elemento.value = "up" ? altitud.innerHTML = altitud.innerHTML - 5 : altitud.innerHTML = altitud.innerHTML - (-5)

}

function acelarar(event) {}






function descender() {
    let altitud = document.getElementById("altitud");

    // if (altitud.innerHTML >= 0) {
    altitud.innerHTML = altitud.innerHTML - 5
        // }

}

function ascender() {
    console.log("jjj");
    let altitud = document.getElementById("altitud")
    altitud.innerHTML = altitud.innerHTML - (-5)

}

function encender() {


    let avionmsg = document.getElementById("avionmsg")
    avionmsg.innerHTML = "Encendido"

    let palacadown = document.getElementById("palancadown")
    palacadown.addEventListener("click", manjearAltitud)

    let palancaup = document.getElementById("palancaup")
    palancaup.addEventListener("click", manjearAltitud)


}

document.addEventListener("DOMContentLoaded", encender);