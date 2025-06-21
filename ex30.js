/*
30. Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que
contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz
e os vetores criados.
*/


const prompt = require('prompt-sync')();

const tamanho = 5;
let M = [];
let SL = Array(tamanho).fill(0); // Soma das Linhas
let SC = Array(tamanho).fill(0); // Soma das Colunas

// Leitura da matriz M[5][5]
console.log("Digite os elementos da matriz M:");
for (let i = 0; i < tamanho; i++) {
    M[i] = [];
    for (let j = 0; j < tamanho; j++) {
        const valor = parseFloat(prompt(`M[${i + 1}][${j + 1}]: `));
        M[i][j] = isNaN(valor) ? 0 : valor;

        // Soma da linha i e da coluna j
        SL[i] += M[i][j];
        SC[j] += M[i][j];
    }
}

// Exibir a matriz M
console.log("\nMatriz M:");
for (let i = 0; i < tamanho; i++) {
    console.log(M[i].map(num => num.toFixed(2)).join('\t'));
}

// Exibir o vetor SL
console.log("\nVetor SL (SomaLinhas):");
for (let i = 0; i < tamanho; i++) {
    console.log(`SL[${i}] = ${SL[i].toFixed(2)}`);
}

// Exibir o vetor SC
console.log("\nVetor SC (SomaColunas):");
for (let j = 0; j < tamanho; j++) {
    console.log(`SC[${j}] = ${SC[j].toFixed(2)}`);
}
