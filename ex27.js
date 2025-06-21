/*
27. Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura,
multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em
um vetor V(36). Escrever o vetor V no final.
*/


const prompt = require('prompt-sync')();

const tamanho = 6;
let M = [];
let V = [];

// Leitura da matriz M
console.log("Digite os elementos da matriz M:");
for (let i = 0; i < tamanho; i++) {
    M[i] = [];
    for (let j = 0; j < tamanho; j++) {
        const valor = parseFloat(prompt(`M[${i + 1}][${j + 1}]: `));
        M[i][j] = isNaN(valor) ? 0 : valor;
    }
}

// Leitura do valor A
const A = parseFloat(prompt("\nDigite o valor A para multiplicar a matriz: "));
const multiplicador = isNaN(A) ? 1 : A;

// Multiplicação e armazenamento no vetor V
for (let i = 0; i < tamanho; i++) {
    for (let j = 0; j < tamanho; j++) {
        V.push(M[i][j] * multiplicador);
    }
}

// Exibindo o vetor V
console.log("\nVetor V (Matriz M multiplicada por A):");
for (let i = 0; i < V.length; i++) {
    console.log(`V[${i}] = ${V[i].toFixed(2)}`);
}
