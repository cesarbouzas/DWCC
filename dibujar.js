document.addEventListener("DOMContentLoaded",ready)
function ready(){
    generarTablaDibujo()
    generarCambioColor()
}

function generarTablaDibujo(){
    let zonaDibujo=document.getElementById("zonadibujo")
    let table=document.createElement("table")
    table.classList.add("tablerodibujo")
    zonaDibujo.appendChild(table)
    for(let i=0;i<30;i++){
        //crear td
        let fila=document.createElement("tr")
        table.appendChild(fila)
            for( let j=0;j<30;j++){
                let col=document.createElement("td")
               col.classList.add("tablerodibujo")
                fila.appendChild(col)
                col.id=`celda=${(i*30)+j+1}`
            }
            table.appendChild(fila)
        //Cerraar td y añadir tabla
    }    
    
}
function generarCambioColor(){
    let colores=document.getElementById("paleta").
        getElementsByTagName("tr")[0].
        getElementsByTagName("td")

     for(let i=0;i<colores.length;i++){
        colores[i].addEventListener("click",cambioColor)
     }   

}
function cambioColor(ev){
    
    document.getElementsByClassName("seleccionado")[0].classList.remove("seleccionado")//solo puede uno

    ev.target.classList.add("seleccionado")


}
//Mirar el estado del color
//click 
    //cambiar el estado (si esta pintando parar borrar todo los mouse hover)
                        // si no es pintando crear todos los eventos mouse hover(1)
//El mouse over pintar(
                //mirar la clase seleccionado y aplicar la clase color
)                           
