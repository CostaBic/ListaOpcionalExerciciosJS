/*
24. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
quantidade de elementos negativos da linha correspondente de M.
*/


const prompt = require('prompt-sync')();

const linhas = 6;
const colunas = 8;
const matriz = [];
const vetorC = [];

console.log("Digite os valores da matriz:");

for (let i = 0; i < linhas; i++) {
  matriz[i] = [];
  let negativos = 0;

  for (let j = 0; j < colunas; j++) {
    const valor = parseInt(prompt(`Valor [${i}][${j}]: `));
    matriz[i][j] = valor;
    if (valor < 0) {
      negativos++;
    }
  }

  vetorC[i] = negativos;
}

console.log("\nMatriz completa:");
matriz.forEach(linha => console.log(linha.join(" ")));

console.log("\nVetor C (quantidade de negativos por linha):");
console.log(vetorC.join(" "));
