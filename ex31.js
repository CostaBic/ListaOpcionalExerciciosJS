/*
31. Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros.
Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo
todos os elementos de V diferentes de A. Mostre os resultados.
*/


const prompt = require('prompt-sync')();

const TAMANHO = 30;
let V = [];
let X = [];
let contador = 0;

// Leitura do número A
const A = parseInt(prompt("Digite um número inteiro A para buscar na matriz: "));
console.log(`\nGerando matriz V[30][30] com valores inteiros aleatórios de 0 a 9...\n`);

// Geração da matriz V com números aleatórios
for (let i = 0; i < TAMANHO; i++) {
    V[i] = [];
    for (let j = 0; j < TAMANHO; j++) {
        const valor = Math.floor(Math.random() * 10); // 0 a 9
        V[i][j] = valor;

        if (valor === A) {
            contador++;
        } else {
            X.push(valor); // Adiciona apenas se diferente de A
        }
    }
}

// Exibir quantidade de ocorrências de A
console.log(`Quantidade de vezes que A (${A}) aparece na matriz V: ${contador}\n`);

// Exibir matriz X (valores diferentes de A)
console.log(`Matriz X (valores diferentes de ${A}):`);
for (let i = 0; i < X.length; i++) {
    process.stdout.write(X[i].toString().padStart(2, ' ') + ' ');
    if ((i + 1) % TAMANHO === 0) console.log(); // Quebra de linha a cada 30 elementos
}
