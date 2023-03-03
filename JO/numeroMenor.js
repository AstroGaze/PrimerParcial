
let numeros = [];

for (let index = 1; index < 4; index++) {
    let numero = parseInt(prompt(`Ingresa tres numeros, numero ${index} :`));
    numeros.push(numero);
    console.log(numeros);
}

function findMin(numeros) {
    let min = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] < min) {
            min = numeros[i];
        }
    }
    console.log(min);
}

findMin(numeros);