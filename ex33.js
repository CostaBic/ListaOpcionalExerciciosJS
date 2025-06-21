/*
33. Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os
elementos da diagonal principal com a média dos elementos da diagonal secundária.
*/


const prompt = require('prompt-sync')();

const tamanho = 3;
let M = [];

// Leitura da matriz 3x3
console.log("Digite os elementos da matriz M:");
for (let i = 0; i < tamanho; i++) {
    M[i] = [];
    for (let j = 0; j < tamanho; j++) {
        const valor = parseFloat(prompt(`M[${i + 1}][${j + 1}]: `));
        M[i][j] = isNaN(valor) ? 0 : valor;
    }
}

// Calcular média da diagonal secundária
let somaSecundaria = 0;
for (let i = 0; i < tamanho; i++) {
    somaSecundaria += M[i][tamanho - 1 - i];
}
const mediaSecundaria = somaSecundaria / tamanho;

// Multiplicar diagonal principal pela média da diagonal secundária
console.log("\nMultiplicando os elementos da diagonal principal pela média da diagonal secundária...");
for (let i = 0; i < tamanho; i++) {
    M[i][i] *= mediaSecundaria;
}

// Mostrar matriz resultante
console.log("\nMatriz resultante:");
for (let i = 0; i < tamanho; i++) {
    console.log(M[i].map(n => n.toFixed(2).padStart(8)).join(' '));
}
