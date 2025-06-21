/*
5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).
*/

const prompt = require('prompt-sync')();


// Opções válidas
const opcoes = ["pedra", "papel", "tesoura"];

// Entrada do jogador
let jogador = prompt("Escolha: pedra, papel ou tesoura: ").toLowerCase();

// Validação da escolha
if (!opcoes.includes(jogador)) {
    console.log("Opção inválida! Escolha pedra, papel ou tesoura.");
} else {
    // Escolha aleatória do computador
    const indiceComputador = Math.floor(Math.random() * 3);
    const computador = opcoes[indiceComputador];

    console.log(`Você escolheu: ${jogador}`);
    console.log(`Computador escolheu: ${computador}`);

    // Verificação do resultado
    if (jogador === computador) {
        console.log("Empate!");
    } else if (
        (jogador === "pedra" && computador === "tesoura") ||
        (jogador === "papel" && computador === "pedra") ||
        (jogador === "tesoura" && computador === "papel")
    ) {
        console.log("Você venceu!");
    } else {
        console.log("Computador venceu!");
    }
}
