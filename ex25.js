/*
25. Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma
de cada coluna separadamente.
*/

// Dimensões da matriz:
const linhas = 15;
const colunas = 20;

// Gerar matriz 15x20 com números aleatórios:
let matriz = [];
for (let i = 0; i < linhas; i++) {
    matriz[i] = [];
    for (let j = 0; j < colunas; j++) {
        // Gera número real entre 0.00 e 100.00 (2 casas decimais)
        matriz[i][j] = parseFloat((Math.random() * 100).toFixed(2));
    }
}

// Mostrar matriz gerada (opcional)
console.log("Matriz gerada aleatoriamente:");
for (let i = 0; i < linhas; i++) {
    console.log(matriz[i].map(num => num.toFixed(2)).join("\t"));
}

// Calcular soma de cada coluna
let somaColunas = Array(colunas).fill(0);

for (let j = 0; j < colunas; j++) {
    for (let i = 0; i < linhas; i++) {
        somaColunas[j] += matriz[i][j];
    }
}

// Exibir somas
console.log("\nSoma de cada coluna:");
for (let j = 0; j < colunas; j++) {
    console.log(`Coluna ${j + 1}: ${somaColunas[j].toFixed(2)}`);
}
