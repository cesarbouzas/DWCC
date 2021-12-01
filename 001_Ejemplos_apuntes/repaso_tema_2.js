/*
console.log(3 + 3); //muestra 6 como numero
console.log(3 + "3"); //muestras 33 como cadena
console.log(1 + 2 + "7"); //Muestras 37 como cadena
console.log(3 + parseInt("89")); //muestra 92
console.log(3 + parseInt("89.999")); //muestras 92
console.log(parseFloat("3.14")); // muestras6.14
console.log(3 + parseFloat("3.1416")) //muestras 6.1416
*/
/**************************************
//Ejemplo de plantillas de string
let nombre = 'bob esponja';
console.log(`El colega de calamardo 'un calamar'"6"es ${nombre}
pero es tonto de los cojones;
el muy subnormar`);
**************************************************/
// Desestructuracion
let nombres = ["calamardo", "patricio"];

let [n1, n2] = nombres;
console.log(`el primer nombre es ${n1} y el segundo es ${n2}`);
let numeros = [5, 34, 1, 500, 45];
console.log(Math.min(...numeros));