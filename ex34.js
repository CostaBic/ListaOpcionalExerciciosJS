/*
34. Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique
cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as
multiplicações.
*/


const linhas = 50;
const colunas = 50;

let M = [];

// Gerar matriz M[50][50] com valores reais aleatórios de 0 a 10
console.log("Gerando matriz M50x50 com números aleatórios entre 0 e 10\n");

for (let i = 0; i < linhas; i++) {
    M[i] = [];
    for (let j = 0; j < colunas; j++) {
        M[i][j] = parseFloat((Math.random() * 10).toFixed(2));
    }
}

// Multiplicar cada linha pelo elemento da diagonal principal daquela linha
for (let i = 0; i < linhas; i++) {
    const fator = M[i][i];
    for (let j = 0; j < colunas; j++) {
        M[i][j] = parseFloat((M[i][j] * fator).toFixed(2));
    }
}

// Mostrar matriz modificada
console.log("Cada linha multiplicada por seu elemento da diagonal principal:\n");

for (let i = 0; i < linhas; i++) {
    console.log(M[i].map(n => n.toFixed(2).padStart(6)).join(' '));
}
