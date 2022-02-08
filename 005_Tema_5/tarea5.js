



function validarNombreYapellidos(){
    let nombre=document.getElementById("nombre").value;
    let apellidos=document.getElementById("apellidos").value;
    let re=new RedExp('^[a-zA-Z]+$');
    correcto=re.test(nombre) && re.test(apellidos);
    //probamos como match
    if(!corecto){
        
      mostrarError();
      PonerFoco();  
      return false;
    }
    console.log("cumple");
    return true;
    //console.log(event.target);
}




function pasarMayus(event){
 let elemento=event.target;
 elemento.value=elemento.value.toUpperCase();
 //console.log(event.target);

}



//el event lo rellena con el evento que venga
function validar(event){
    valido=true;
    valido=valido && validarNombreYapellidos();
    //valido=valido && validarEmail();// asi ejecuto solo hasta que una sea false.
    //valido=validarEmail()&&valido;//asi se ejecutan todas las funciones ...

    if(!valido){
        console.log("false");
        //console.log("event");
        event.preventDefault();
    }
}




function ready(){
    let formulario=document.getElementById("formulario");
    //console.log(botonEnviar);
    let nombre=document.getElementById("nombre");
    let apellidos=document.getElementById("apellidos");


    formulario.addEventListener("submit",validar);
    nombre.addEventListener("blur",pasarMayus);
    apellidos.addEventListener("blur",pasarMayus);
    

}
document.addEventListener("DOMContentLoaded",ready)
