function validarNombreApellidos() {
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let re = new RegExp(/^[A-Z-a-z]+$/);

    correcto = re.test(nombre) && re.test(apellidos);
    //probamos como match
    if (!correcto) {

        //mostrarError

        document.getElementById("errores").innerHTML = "nombre/apellidos con formato no válido";

        //PonerFoco
        document.getElementById("nombre").focus();
        document.getElementById("apellidos").focus();
        return false;
    }

    return true;
    //console.log(event.target);
}

function validarEdad() {
    let edad = document.getElementById("edad").value;
    if (isNaN(edad) || edad < 0 || edad > 105) {
        document.getElementById("errores").innerHTML = "Formato de edad incorrecto.";
        document.getElementById("edad").focus();
        return false;
    }
    return true;
}

function validarNif() {
    let nif = document.getElementById("nif").value;
    //Patrón debe de ser 8 números entre 0 y 9 y una letra entre A-Z mayúscula o minúscula.
    let patron = new RegExp(/^[0-9]{8}[a-zA-Z]{1}$/);
    correcto = patron.test(nif);
    if (!correcto) {
        document.getElementById("errores").innerHTML = "Formato de NIF incorrecto.";
        document.getElementById("nif").focus();
        return false;
    }
    return true;
}


//tes regular expresion regex101.com ^([0-9]|[1-9][0-9]|10[0-5])$
//^([a-zA-Z0-9)([a-zA-Z0-9._]+)@([a-zA-Z0-9]+)(\.[a-zA-Z]+)$
function validarEmail() {
    let email = document.getElementById("email").value;
    let patron = new RegExp(/^([a-zA-Z0-9])+([a-zA-Z0-9._-])+@([a-zA-Z0-9.-])+(\.([a-zA-Z]{2,4}))$/);
    correcto = patron.test(email);
    if (!correcto) {
        document.getElementById("errores").innerHTML = "Formato de email incorrecto.";
        document.getElementById("email").focus();
        return false;
    }
    return true;
}


function validarProvincia() {
    let provincia = document.getElementById("provincia").value;
    if (provincia == 0) {
        document.getElementById("errores").innerHTML = "Debe seleccionar una provincia.";
        document.getElementById("provincia").focus();
        return false;
    } else {
        return true;
    }
}

function pasarMayus(event) {
    let elemento = event.target;
    elemento.value = elemento.value.toUpperCase();
    //console.log(event.target);

}


function validarFecha() {
    let fecha = document.getElementById("fecha").value;
    let patron = new RegExp(/^(0[1-9]|1\d|2\d|3[0-1])-(0[1-9]|1[0-2])-\d{4}$/);
    correcto = patron.test(fecha);
    if (!correcto) {
        document.getElementById("errores").innerHTML = "Formato de fecha incorrecto.";
        document.getElementById("fecha").focus();
        return false;
    }
    return true;
}

function validarTelefono() {
    let telf = document.getElementById("telefono").value;
    let patron = new RegExp(/^[0-9]{9}$/);
    correcto = patron.test(telf);
    if (!correcto) {
        document.getElementById("errores").innerHTML = "Formato de teléfono incorrecto.";
        document.getElementById("telefono").focus();
        return false;
    }
    return true;
}

function validarHora() {
    let hora = document.getElementById("hora").value;
    let patron = new RegExp(/^(0[1-9]|1\d|2[0-3]):([0-5]\d)$/);
    correcto = patron.test(hora);
    if (!correcto) {
        document.getElementById("errores").innerHTML = "Formato de hora incorrecto.";
        document.getElementById("hora").focus();
        return false;
    }
    return true;
}


//una cokie es como una sesion de php .
//las cookies se guardan para cada web son simepre clave valor y una fecha de expiracion

function setCookie(valor) {
    document.cookie = `intento=${valor}`;

}

//w3scholl fuente
function getCookie(cname) {
    let name = cname + "=";
    let stringDeCookies = decodeURIComponent(document.cookie);
    let arrayDeCookies = stringDeCookies.split(';');
    for (let i = 0; i < arrayDeCookies.length; i++) {
        let cookie = arrayDeCookies[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) == 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return "0";
}
/*
function borrarCookie(nombre) {
    crearCookie(nombre, "", -1);
}
*/
//valido=valido && validarEmail();// asi ejecuto solo hasta que una sea false.
//valido=validarEmail()&&valido;//asi se ejecutan todas las funciones ...
//el event lo rellena con el evento que venga


function validar(event) {
    let intentos = parseInt(getCookie("intento")) + 1;
    setCookie(intentos);
    document.getElementById("intentos").innerHTML = "Llevas " + intentos + " intentos;";
    let valido = true;
    valido = valido && validarNombreApellidos();
    valido = valido && validarEdad();
    valido = valido && validarNif();
    valido = valido && validarEmail();
    valido = valido && validarProvincia();
    valido = valido && validarFecha();
    valido = valido && validarTelefono();
    valido = valido && validarHora();

    if (!valido) {
        event.preventDefault();
    }
}




function iniciarEventos() {
    document.cookie = "intento=; max-age=0";

    let formulario = document.getElementById("formulario");
    let nombre = document.getElementById("nombre");
    let apellidos = document.getElementById("apellidos");
    nombre.
    nombre.addEventListener("blur", pasarMayus);
    apellidos.addEventListener("blur", pasarMayus);
    formulario.addEventListener("submit", validar);
}



document.addEventListener("DOMContentLoaded", iniciarEventos);




/*
Programar el código de JavaScript en un fichero independiente. La única modificación que se permite realizar en el fichero .html es la de escribir la referencia al fichero de JavaScript.
Almacenar en una cookie el número de intentos de envío del formulario que se van produciendo y mostrar un mensaje en el contenedor "intentos" similar a: "Intento de Envíos del formulario: X". Es decir cada vez que le demos al botón de enviar tendrá que incrementar el valor de la cookie en 1 y mostrar su contenido en el div antes mencionado. Nota: para poder actualizar el contenido de un contenedor o div la propiedad que tenemos que modificar para ese objeto es innerHTML.
Cada vez que los campos NOMBRE y APELLIDOS pierdan el foco, el contenido que se haya escrito en esos campos se convertirá a mayúsculas.
Realizar una función que valide los campos de texto NOMBRE y APELLIDOS. Si se produce algún error mostrar el mensaje en el contenedor "errores" y poner el foco en los campos correspondientes.
Validar la EDAD que contenga solamente valores numéricos y que esté en el rango de 0 a 105. Si se produce algún error mostrar el mensaje en el contenedor "errores" y poner el foco en el campo EDAD.
Validar el NIF. Utilizar una expresión regular que permita solamente 8 números un guión y una letra. Si se produce algún error mostrar el mensaje en el contenedor "errores" y poner el foco en el campo NIF. No es necesario validar que la letra sea correcta. Explicar las partes de la expresión regular mediante comentarios.
Validar el E-MAIL. Utilizar una expresión regular que nos permita comprobar que el e-mail sigue un formato correcto. Si se produce algún error mostrar el mensaje en el contenedor "errores" y poner el foco en el campo E-MAIL. Explicar las partes de la expresión regular mediante comentarios.
Validar que se haya seleccionado alguna de las PROVINCIAS. Si se produce algún error mostrar el mensaje en el contenedor "errores" y poner el foco en el campo PROVINCIA.
Validar el campo FECHA utilizando una expresión regular. Debe cumplir alguno de los siguientes formatos: dd/mm/aaaa o dd-mm-aaaa. No se pide validar que sea una fecha de calendario correcta. Si se produce algún error mostrar el mensaje en el contenedor "errores" y poner el foco en el campo FECHA. Explicar las partes de la expresión regular mediante comentarios.
Validar el campo TELEFONO utilizando una expresión regular. Debe permitir 9 dígitos obligatorios. Si se produce algún error mostrar el mensaje en el contenedor "errores" y poner el foco en el campo TELEFONO. Explicar las partes de la expresión regular mediante comentarios.
Validar el campo HORA utilizando una expresión regular. Debe seguir el patrón de hh:mm. No es necesario validar que sea una hora correcta. Si se produce algún error mostrar el mensaje en el contenedor "errores" y poner el foco en el campo HORA. Explicar las partes de la expresión regular mediante comentarios.
Pedir confirmación de envío del formulario. Si se confirma el envío realizará el envío de los datos; en otro caso cancelará el envío.
*/