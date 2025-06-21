/*
26. Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto
P[1..3,1..5].
*/


const prompt = require('prompt-sync')();

const linhas = 3;
const colunas = 5;

// Inicializando matrizes
let A = [], B = [], P = [];

// Leitura da matriz A
console.log("Digite os elementos da matriz A:");
for (let i = 0; i < linhas; i++) {
    A[i] = [];
    for (let j = 0; j < colunas; j++) {
        const valor = parseFloat(prompt(`A[${i + 1}][${j + 1}]: `));
        A[i][j] = isNaN(valor) ? 0 : valor;
    }
}

// Leitura da matriz B
console.log("\nDigite os elementos da matriz B:");
for (let i = 0; i < linhas; i++) {
    B[i] = [];
    for (let j = 0; j < colunas; j++) {
        const valor = parseFloat(prompt(`B[${i + 1}][${j + 1}]: `));
        B[i][j] = isNaN(valor) ? 0 : valor;
    }
}

// Calculando a matriz produto P
for (let i = 0; i < linhas; i++) {
    P[i] = [];
    for (let j = 0; j < colunas; j++) {
        P[i][j] = A[i][j] * B[i][j];
    }
}

// Exibindo a matriz P
console.log("\nMatriz Produto P (A * B elemento a elemento):");
for (let i = 0; i < linhas; i++) {
    console.log(P[i].map(num => num.toFixed(2)).join('\t'));
}
