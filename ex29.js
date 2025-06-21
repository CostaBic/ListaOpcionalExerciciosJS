/*
29. Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
a) da linha 4 de M;
b) da coluna 2 de M;
c) da diagonal principal;
d) todos os elementos da matriz M.
Escrever essas somas e a matriz.
*/


const prompt = require('prompt-sync')();

const tamanho = 5;
let M = [];
let somaLinha4 = 0;
let somaColuna2 = 0;
let somaDiagonalPrincipal = 0;
let somaTotal = 0;

// Leitura da matriz M[5][5]
console.log("Digite os elementos da matriz M:");
for (let i = 0; i < tamanho; i++) {
    M[i] = [];
    for (let j = 0; j < tamanho; j++) {
        const valor = parseFloat(prompt(`M[${i + 1}][${j + 1}]: `));
        M[i][j] = isNaN(valor) ? 0 : valor;

        // Soma total
        somaTotal += M[i][j];

        // Linha 4 (índice 3)
        if (i === 3) somaLinha4 += M[i][j];

        // Coluna 2 (índice 1)
        if (j === 1) somaColuna2 += M[i][j];

        // Diagonal principal
        if (i === j) somaDiagonalPrincipal += M[i][j];
    }
}

// Exibir matriz
console.log("\nMatriz M:");
for (let i = 0; i < tamanho; i++) {
    console.log(M[i].map(num => num.toFixed(2)).join('\t'));
}

// Exibir somas
console.log("\nResultados:");
console.log("a) Soma da linha 4:", somaLinha4.toFixed(2));
console.log("b) Soma da coluna 2:", somaColuna2.toFixed(2));
console.log("c) Soma da diagonal principal:", somaDiagonalPrincipal.toFixed(2));
console.log("d) Soma de todos os elementos:", somaTotal.toFixed(2));
