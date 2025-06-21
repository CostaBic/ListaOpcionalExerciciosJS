/*
37. Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa
o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de
respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do
aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12;
e mostre uma mensagem de “REPROVADO”, caso contrário.
*/

const TOTAL_QUESTOES = 20;
const TOTAL_ALUNOS = 50;
const OPCOES = ['A', 'B', 'C', 'D'];

// Gera um gabarito aleatório
let gabarito = [];
for (let i = 0; i < TOTAL_QUESTOES; i++) {
    const letra = OPCOES[Math.floor(Math.random() * OPCOES.length)];
    gabarito.push(letra);
}

console.log("Gabarito gerado:");
console.log(gabarito.join(" ") + "\n");

// Processar alunos
for (let aluno = 1; aluno <= TOTAL_ALUNOS; aluno++) {
    let respostas = [];
    let acertos = 0;

    for (let j = 0; j < TOTAL_QUESTOES; j++) {
        const resp = OPCOES[Math.floor(Math.random() * OPCOES.length)];
        respostas.push(resp);

        if (resp === gabarito[j]) {
            acertos++;
        }
    }

    const status = acertos >= 12 ? "APROVADO" : "REPROVADO";
    console.log(`Aluno ${aluno}: ${acertos} acerto(s) - ${status}`);
}
