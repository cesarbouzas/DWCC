class Edificio {
    calle;
    numero;
    cp;
    plantas = new Array(new Array());

    constructor(calle, numero, cp) {
        this.calle = calle;
        this.numero = numero;
        this.cp = cp;
        this.infoEdificio();
    }


    infoEdificio() {

        console.log("Construido un edifico de  ${Edificio.toString}");
    }
    agregarPlantasyPuertas(nplantas, npuertas) {
        return this.plantas.push(nplantas[npuertas]);

    }
    modificarNumero(n) {
        this.numero = n;
    }
    modificarCalle(calle) {
        this.calle = calle;
    }
    modificarCodigoPostal(cp) {
        this.cp = cp;
    }
    imprimirCalle() {

        console.log(this.calle);
    }
    imprimirNumero() {
        console.log(this.numero);
    }
    imprimirCodigoPostal() {
        console.log(this.cp);
    }
    agregarPropietario(nombre, planta, puerta) {
        this.plantas[planta][puerta] = nombre;
        console.log("ahora es el propietario de la puerta ${puerta} en la planta ${planta}")
    }
    imprimePlantas() {
        for (let i = 0; i < this.plantas.length; i++) {
            console.log("En la planta ${i} viven :/n")
            for (let j = 0; j < plantas[i].length; j++) {
                console.log("Puerta ${j} : plantas[i][j]");
            }
        }
    }
}

ed1 = new Edificio("che guevara 153", 153, 15179);





/*infoEdificio() // Devolverá una cadena con la información del edificio, es decir, sus propiedades.
agregarPlantasYPuertas(numplantas, puertas) // Se le pasa el número de plantas que queremos crear en el piso y el número de puertas por planta. 
Cada vez que se llame a este método, añadirá el número de plantas y puertas indicadas en los parámetros, a las que ya están creadas en el edificio.
modificarNumero(numero) // Se le pasa el nuevo número del edificio para que lo actualice.
modificarCalle(calle) // Se le pasa el nuevo nombre de la calle para que lo actualice.
modificarCodigoPostal(codigo) // Se le pasa el nuevo número de código postal del edificio.
imprimeCalle // Devuelve el nombre de la calle del edificio.
imprimeNumero // Devuelve el número del edificio.
imprimeCodigoPostal // Devuelve el código postal del edificio.
agregarPropietario(nombre,planta,puerta) // Se le pasa un nombre de propietario, un número de planta y un número de puerta y lo asignará como propietario de ese piso. Adicionalmente devolverá una cadena con la asignación realizada
imprimePlantas // Recorrerá el edificio y devolverá una cadena con todos los propietarios de cada puerta.
Cada vez que se crea un edificio, realizar la llamada al método infoEdificio para que muestre automáticamente la información del mismo, con un mensaje del estilo:
construido nuevo edificio en calle: xxxxxx, nº: xx, CP: xxxxx, Plantas: xx
Tener en cuenta que cuando se crea un edificio, el número de plantas será cero (se crea un array vacío), pero asi el método servirá para el objeto en cualquier momento.
Cada vez que se añada un propietario a un piso de un edificio que muestre un mensaje del estilo:
 es ahora el propietario de la puerta x de la planta y.
Esta información será la que se obtenga del metodo agregarPropietario(nombre,planta,puerta).*/