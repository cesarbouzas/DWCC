

//let s =+prompt("Introduce numero :");//No me funciona en VScode por linea comandos.
let s=5;
let i=0
console.log(`++++++++++++Tabla de sumar de ${s}++++++++++++++++`);
do{console.log(`${s}+${i}=${i+++s}`);
}while(i<=10)

console.log(`**********Tabla de multiplicar del 10*************`);
i=0;
while(i<=10){console.log("10x"+i+"="+10*i++)};

i=0;
console.log(`/////////////////Tabla de dividir de 9//////////////`);
for(i=0;i<=10;i++){
    console.log(`9/${i}=${(9/i).toFixed(2)}`);
}

