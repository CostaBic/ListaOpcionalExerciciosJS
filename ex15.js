/*
15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No final, mostre quais são os números pares que foram digitados e em que posições eles estão armazenados.
*/

const prompt = require('prompt-sync')();

let numeros = [];

console.log("Digite 10 números inteiros:");

// Leitura dos 10 números
for (let i = 0; i < 10; i++) {
    let num = parseInt(prompt(`Digite o ${i + 1}º número: `));
    numeros.push(num);
}

// Exibição dos pares e suas posições
console.log("\n=== Números pares e suas posições ===");
let encontrouPar = false;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        console.log(`Número par ${numeros[i]} na posição ${i}`);
        encontrouPar = true;
    }
}

if (!encontrouPar) {
    console.log("Nenhum número par foi digitado.");
}
