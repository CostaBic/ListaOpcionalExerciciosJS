/*
32. Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de
cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a
matriz lida e a modificada.
*/


const prompt = require('prompt-sync')();

const linhas = 12;
const colunas = 13;
let M = [];
let M_modificada = [];

// Geração aleatória da matriz M com valores inteiros de -50 a 50
console.log("Gerando matriz M12 x 13 com valores aleatórios\n");

for (let i = 0; i < linhas; i++) {
    M[i] = [];
    M_modificada[i] = [];
    for (let j = 0; j < colunas; j++) {
        const valor = Math.floor(Math.random() * 101) - 50; // -50 a 50
        M[i][j] = valor;
    }
}

// Processamento: dividir cada elemento da linha pelo maior valor absoluto da linha
for (let i = 0; i < linhas; i++) {
    const maiorModulo = Math.max(...M[i].map(e => Math.abs(e))) || 1; // evitar divisão por 0
    for (let j = 0; j < colunas; j++) {
        M_modificada[i][j] = M[i][j] / maiorModulo;
    }
}

// Exibir matriz original
console.log("Matriz original:");
for (let i = 0; i < linhas; i++) {
    console.log(M[i].map(n => n.toString().padStart(4)).join(' '));
}

// Exibir matriz modificada
console.log("\nMatriz modificada M_modificada (elementos divididos pelo maior módulo da linha):");
for (let i = 0; i < linhas; i++) {
    console.log(M_modificada[i].map(n => n.toFixed(2).padStart(6)).join(' '));
}
