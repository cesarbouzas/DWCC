function mostrarTabla() {
    //this.event.preventDefault();
    let numero = (window.document.getElementById("numero").value);
    let tabla = window.document.getElementById("tabla");
    let contenido = "<table>";
    for (i = 0; i <= 10; i++) {
        contenido += `<tr><td>${numero} </td> <td>x</td><td>${i}</td><td> ${numero*i}</td></tr>`;
    }
    contenido += "</table>";

    setInterval(escribirInner(contenido), 100);

}

function escribirInner(con) {
    tabla.innerHTML = con;
}