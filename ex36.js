/*
36. Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de
um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número
do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o
número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva
o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a
mensagem "Parabéns, tu foi o GANHADOR".
*/

const TOTAL_QUESTOES = 13;
const TOTAL_APOSTADORES = 100;

// Gerar gabarito com números de 1 a 3
let gabarito = [];
for (let i = 0; i < TOTAL_QUESTOES; i++) {
    gabarito.push(Math.floor(Math.random() * 3) + 1);
}

console.log("Gabarito gerado aleatoriamente:");
console.log(gabarito.join(" ") + "\n");

for (let i = 0; i < TOTAL_APOSTADORES; i++) {
    const numeroCartao = 1001 + i;
    let respostas = [];
    let acertos = 0;

    // Gerar 13 respostas aleatórias para o apostador
    for (let j = 0; j < TOTAL_QUESTOES; j++) {
        const resp = Math.floor(Math.random() * 3) + 1;
        respostas.push(resp);

        if (resp === gabarito[j]) {
            acertos++;
        }
    }

    console.log(`Apostador ${numeroCartao}: ${acertos} acerto(s).`);
    if (acertos === TOTAL_QUESTOES) {
        console.log("Parabéns, tu foi o GANHADOR!\n");
    }

    console.log("------------------------------------------------");
}
