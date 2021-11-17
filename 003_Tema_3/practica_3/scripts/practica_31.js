var ventana;
//abrimos unas ventana pero controlando si ya existe.
function parte1() {
    abrirVentana();

}

//Si la ventana existe o no ha sido cerrada devuelve true.
function existeVentana() {
    if ((ventana != null) && (ventana.closed == false)) {
        return true;
    } else {
        return false;
    }

}


//Abrimos la ventana comprobando si existe y llamamos a una funcion con un retardo de 5 sg.

function abrirVentana() {
    if (!existeVentana()) {
        ventana = window.open("", "ventana", "width=800,height=500");
        ventana.setTimeout(datosVentana, 5000);
        ventana.focus();

    } else {
        //En el caso de que exista la ventana le colocamos el foco para verla.
        ventana.focus();
    }
}
// calcula e imprime en la ventana el contendio pedido y un boton para cerrar
function datosVentana() {
    let txt;
    ventana.document.write("<h3>Datos ventana</h3>");

    txt = "<script>function cerrar()\{window.close();}</script>";
    txt += "</br> Nombre de la ventana :" + ventana.name;
    txt += "</br> Direccion url completa :" + window.location.toString();
    txt += "</br> Protocolo utilizado :" + window.location.protocol.toString();
    txt += "</br> Java " + ((window.navigator.javaEnabled()) ? "SI" : "No") + " está disponible en esta ventana </br>";
    boton = "<button onclick=\"cerrar()\">Cerrar</button>";
    ventana.document.write(txt);
    ventana.document.write(boton);


}




//ejecuion de la segunda parte :
// debemos pasar por la parte 1 para poder continuar con la parte 2.
function parte2() {
    // si existe la ventana de la parte 1 sigue abierta pedimos confirmacion para cerrarla y escribimos los datos pedios en la ventana principal
    if (existeVentana()) {
        let op = confirm("¿Cerrar la parte 1 para continuar?");


        if (op == true) {
            ventana.close();
            window.parent.focus();
            escribirDatos();
        } else {
            ventana.focus();
        }
    } else {

        //Si la ventana de la parte 1 fue creada y cerrada tambien podemos continuar.
        if (ventana.closed == true) {
            window.parent.focus();
            escribirDatos();
        } else {

            self.alert("Pulsa parte 1 para empezar");
        }
    }
}




// zona funciones parte 2;


function calcularEdad(fNac) {

    hoy = new Date();
    cumple = new Date(fNac);
    cumple.setFullYear(hoy.getFullYear());
    edad = cumple.getFullYear() - fNac.getFullYear();
    if (cumple > hoy) {
        edad--;
    }
    return edad;
}

//getday() devuleve como valor 0 el domingo y así el resto de dias, por ello creo un array con esta disposicion.
function calcularDiaSemana(num) {

    diasSemana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

    return diasSemana[num];
}



//Escribe los datos pedidos en la ventana.
function escribirDatos() {

    window.document.write("<h1> Tarea DWE03</h1>");
    let nombreApellidos = prompt("Introduce tu nombre y apellidos");
    let arrayNombreApellidos = nombreApellidos.split(" ", 3);
    let diaNac = +prompt("Introduce Dia de nacimiento");
    let mesNac = +prompt("Introduce Mes de nacimiento") - 1;
    let anoNac = +prompt("Introduce Año de nacimiento");
    fNac = new Date(anoNac, mesNac, diaNac);
    window.document.write("</br>Buenos dias " + arrayNombreApellidos[0].toString());
    window.document.write("</br>Tu nombre y apellidos tiene :" + nombreApellidos.length + " includios espacios");
    document.write("</br>Tu nombre:" + arrayNombreApellidos[0].length + " sin espacios");
    document.write("</br>La letra a aparece en la posición : " + (arrayNombreApellidos[0].search("a") + 1) + " de tu nombre.");
    document.write("</br>La letra a aparece por última vez en la posción : " + (nombreApellidos.lastIndexOf("a") + 1) + " de tu nombre y apellidos incluidos espacios");
    document.write("</br>Tu nombre sin las 3 primeras letras es :" + arrayNombreApellidos[0].substring(3));
    document.write("</br>Tu nombre todo en mayusculas es :" + arrayNombreApellidos[0].toUpperCase());
    document.write("</br>Tu edad es de  " + calcularEdad(fNac) + " años");
    document.write("</br>Naciste el feliz día de la semana " + calcularDiaSemana(fNac.getDay()) + " del año " + fNac.getFullYear());
    document.write("</br>El coseno de 180 es :" + Math.cos(Math.PI));
    document.write("</br>El menor de los numeros (5,77,42,75,350,19) es :" + Math.min(5, 77, 42, 75, 350, 19));
    document.write("</br>Ejemplo de número al azar de 1 a 100 :" + Math.round(Math.random() * 100));
}
/*
Que escriba en la ventana principal <h1>TAREA DWEC03</h1><hr>
Que solicite: introduzca su nombre y apellidos.
Que solicite: introduzca DIA de nacimiento.
Que solicite: introduzca MES de nacimiento.
Que solicite: introduzca AÑO de nacimiento.
Una vez solicitados esos datos imprimirá en la ventana principal:
Buenos dias XXXXX
Tu nombre tiene XX caracteres, incluidos espacios.
La primera letra A de tu nombre está en la posición: X
La última letra A de tu nombre está en la posición: X
Tu nombre menos las 3 primeras letras es: XXXXXXXX
Tu nombre todo en mayúsculas es: XXXXXXXX
Tu edad es: XX años.
Naciste un feliz DIADESEMANAENLETRA del año XXXX.
El coseno de 180 es: XXXXXXXXXX
El número menor de (5,77,42,75,350,19) es: XX
Ejemplo de número al azar del 1 al 100: XXXXXXXXXX
*/