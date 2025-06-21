/*
16. Crie uma lógica que preencha um vetor de 20 posições com números aleatórios (entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados
*/



const prompt = require('prompt-sync')();

let numeros = [];

// Gerar 20 números aleatórios entre 0 e 99
for (let i = 0; i < 20; i++) {
    let aleatorio = Math.floor(Math.random() * 100);
    numeros.push(aleatorio);
}

// Exibir os números gerados
console.log("\nNÚMEROS GERADOS ALEATORIAMENTE");
console.log(numeros.join(", "));

// Ordenar em ordem crescente
numeros.sort((a, b) => a - b);

// Exibir os números ordenados
console.log("\nNÚMEROS EM ORDEM CRESCENTE");
console.log(numeros.join(", "));
