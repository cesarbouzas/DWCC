< script >
    class Edificio {
        //calle;
        //numero;
        //cp;
        //plantas = new Array(new Array());


        //Constructor con calle numero codigo postal y un array de plantas vacio, al finalizar imprimimos la informacion
        constructor(calle, numero, cp, plantas) {
            this.calle = calle;
            this.numero = numero;
            this.cp = cp;
            this.plantas = new Array();
            this.infoEdificio();
        }

        //imprime la informacion de la construccion de un edifcio 
        infoEdificio() {

                console.log(`Construido un edifico en ${this.calle} Nº ${this.numero} ,CP=${this.cp} y ${this.plantas.length} plantas`);
            }
            // Agregamos mediante push primero las plas plantas u dentro de cada una un array con las puertas
        agregarPlantasyPuertas(nplantas, npuertas) {
                for (let i = 0; i < nplantas; i++) {
                    this.plantas.push(new Array(npuertas));
                }

            }
            //modifica el numero del edificio
        modificarNumero(n) {
                this.numero = n;
            }
            //modifica la calle del edifico
        modificarCalle(calle) {
                this.calle = calle;
            }
            //modifica el codigo postal del edificio
        modificarCodigoPostal(cp) {
                this.cp = cp;
            }
            //imprime por consola la calle del edificio
        imprimirCalle() {

                console.log(this.calle);
            }
            //imprime por consolael numero del edificio
        imprimirNumero() {
                console.log(this.numero);
            }
            //imprime por consola el codigo postal del edificio
        imprimirCodigoPostal() {
                console.log(this.cp);
            }
            // agrega al edificio el propietario introduciendo el numero de planta y puerta desde 1 y no desde 0 como los arrays
        agregarPropietario(nombre, planta, puerta) {

                planta -= 1;
                puerta -= 1;

                if (planta <= this.planta.length && puerta <= this.planta[planta].puerta.length) {
                    this.plantas[planta][puerta] = nombre;
                    console.log(`${nombre} es ahora es el propietario de la puerta ${puerta+1} en la planta ${planta+1}`);
                } else {
                    this.console.log("planta o piso erroneo");
                }
                //recorre las plantas i y las puertas j y nos devuleve el propietario , en el caso de que no tenga no imprime nada en el nombre
                imprimePlantas() {
                    for (let i = 0; i < this.plantas.length; i++) {
                        for (let j = 0; j < this.plantas[i].length; j++) {
                            if (this.plantas[i][j]) {
                                console.log(`El propietario del piso ${j+1} de la planta ${i+1} es :${this.plantas[i][j]}`);
                            } else {
                                console.log(`El propietario del piso ${j+1} de la planta ${i+1} es :`);
                            }

                        }
                    }
                }
            }
            //Construimos 3 edificios con los datos facilitados
        edificioA = new Edificio("Garcia Prieto", 58, 15706);
        edificioB = new Edificio("Camino Caneiro", 29, 32004);
        edificioC = new Edificio("San Clemente", "s/n", 15705);

        //Imprimimos los datos de ciertos edificios pedidos
        console.log(`El codigo postal del edificio A es :${edificioA.cp}`);
        console.log(`La calle del edificio C es :${edificioC.calle}`);
        console.log(`El edificio B está situado en la calle ${edificioB.calle} número ${edificioB.numero} `);
        //agregamos 2 plantas y 3 puertas por planta al edificio A

        edificioA.agregarPlantasyPuertas(2, 3);
        //console.log(edificioA.plantas[0].length); //comprobaciones durante la programacion

        //agregamos los propietarios en las plantas y puertas indicadas.
        edificioA.agregarPropietario("Jose Antonio Lopez", 1, 1)
        edificioA.agregarPropietario("Luisa Martinez", 1, 2);
        edificioA.agregarPropietario("Marta Castellon", 1, 3);
        edificioA.agregarPropietario("JAntonio Pereira", 2, 2);
        //imprimimos todos los porpietarios del edificio A
        edificioA.imprimePlantas();
        //Agregamos una planta 
        edificioA.agregarPlantasyPuertas(1, 3);
        //agregamos un nuevo propietario en la nueva planta en la puerta 2
        edificioA.agregarPropietario("Pedro Mejide", 3, 2);
        //volvemos a imprimir el edificioA completo
        edificioA.imprimePlantas();



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
        <
        /script>