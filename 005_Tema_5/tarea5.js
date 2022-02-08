function validar(event){
    valido=false;
    if(!valido){
        console.log("false");
        event.preventDefault();
    }
}




function ready(){
    let formulario=document.getElementById("formulario");
    //console.log(botonEnviar);
    formulario.addEventListener("submit",validar)

    

}
document.addEventListener("DOMContentLoaded",ready)
