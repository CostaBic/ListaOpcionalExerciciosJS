/*
6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai tentar descobrir qual foi o valor sorteado.
*/


const prompt = require('prompt-sync')();

// Gera número aleatório entre 1 e 5
const numeroSorteado = Math.floor(Math.random() * 5) + 1;


const palpite = parseInt(prompt("Tente adivinhar o número entre 1 e 5: "));

// Validação e resposta
if (palpite < 1 || palpite > 5 || isNaN(palpite)) {
    console.log("Entrada inválida! Digite um número entre 1 e 5.");
} else if (palpite === numeroSorteado) {
    console.log("Parabéns! Você acertou!");
} else {
    console.log(`Errou! O número sorteado foi ${numeroSorteado}.`);
}
