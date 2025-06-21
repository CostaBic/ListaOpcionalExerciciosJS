/*
8. Um programa de vida saudável quer dar pontos por atividades físicas realizadas que podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O sistema funciona assim:- até 10 h deatividade no mês: ganha 2 pontos por hora- de10 haté20hdeatividade no mês: ganha5pontosporhora- acimade20hdeatividade nomês:ganha10pontos por hora- Acadapontoganho,ocliente fatura R$ 0,05 (5 centavos) Faça umprogramaqueleiaquantas horas de atividade uma pessoa teve por mês. Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.
*/


const prompt = require('prompt-sync')();


const horas = parseFloat(prompt("Quantas horas de atividade física você fez neste mês? "));
let pontos = 0;

// Cálculo dos pontos conforme as faixas
if (horas <= 10) {
    pontos = horas * 2;
} else if (horas <= 20) {
    pontos = horas * 5;
} else {
    pontos = horas * 10;
}

// Cada ponto vale R$ 0,05
const valorRecompensa = pontos * 0.05;

console.log(`\nVocê acumulou ${pontos} pontos.`);
console.log(`Você ganhou R$ ${valorRecompensa.toFixed(2)} em recompensas.`);
