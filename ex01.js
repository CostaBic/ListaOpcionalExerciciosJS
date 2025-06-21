/*Escreva um programa para calcular a redução do tempo de vida de um fumante. Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou. Considere que um fumante perde10 mindevidaacadacigarro. Calcule quantos dias de vida umfumante perderá e exiba o total em dias.*/

const prompt = require('prompt-sync')();

// Entrada de dados

const cigarrosPorDia = parseInt(prompt("Quantos cigarros você fuma por dia? "));
const anosFumando = parseInt(prompt("Há quantos anos você fuma? "));

// Verificação de entrada
if (
    isNaN(cigarrosPorDia) || cigarrosPorDia <= 0 ||
    isNaN(anosFumando) || anosFumando <= 0
) {
    console.log("Por favor, insira valores válidos.");
} else {
    // Cálculo
    const totalCigarros = cigarrosPorDia * 365 * anosFumando;
    const minutosPerdidos = totalCigarros * 10;
    const diasPerdidos = Math.floor(minutosPerdidos / (60 * 24)); // 60 min por hora * 24 h

    // Saída
    console.log(`Você perdeu aproximadamente ${diasPerdidos} dias de vida.`);
}
