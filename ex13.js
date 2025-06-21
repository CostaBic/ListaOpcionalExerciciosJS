/*
13. Crie um programa que preencha automaticamente (usando lógica, não apenas atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos dasequência de Fibonacci.
*/

const prompt = require('prompt-sync')();


let fibonacci = []; // Vetor vazio

// Os dois primeiros elementos da sequência são 1 e 1
fibonacci[0] = 1;
fibonacci[1] = 1;

// Preencher o restante com base na soma dos dois anteriores
for (let i = 2; i < 15; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

// Mostrar os valores
console.log("Vetor com 15 posições:");
console.log(fibonacci.join(", "));
