/*
12. Faça um programa que mostre os 10primeiros elementos da Sequência de Fibonacci. Ex.: 1, 1, 2, 3, 5, 8, 13, 21.
*/


const prompt = require('prompt-sync')();

function gerarFibonacciApartirDe(n, quantidade) {
  let fib = [1, 1];
  
  // Gera Fibonacci até ultrapassar o valor inicial
  while (fib[fib.length - 1] < n) {
    const proximo = fib[fib.length - 1] + fib[fib.length - 2];
    fib.push(proximo);
  }

  // Filtra os que são maiores ou iguais ao valor digitado
  const sequencia = fib.filter(valor => valor >= n);

  // Garante que teremos pelo menos 10 valores
  while (sequencia.length < quantidade) {
    const a = fib[fib.length - 1];
    const b = fib[fib.length - 2];
    const proximo = a + b;
    fib.push(proximo);
    sequencia.push(proximo);
  }

  return sequencia.slice(0, quantidade);
}

// Programa principal
const entrada = parseInt(prompt("Digite um número para iniciar a sequência de Fibonacci a partir dele: "));
if (isNaN(entrada) || entrada < 1) {
  console.log("Por favor, digite um número inteiro positivo válido.");
} else {
  const resultado = gerarFibonacciApartirDe(entrada, 10);
  console.log("10 primeiros elementos da sequência de Fibonacci a partir de", entrada + ":");
  console.log(resultado.join(", "));
}
