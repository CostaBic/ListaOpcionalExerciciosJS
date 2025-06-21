/*
19. Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de repetição. Escrever cada um deles no formato HH.MM.SS.
*/

const prompt = require('prompt-sync')();

function validarHorario(h, m, s) {
  return h >= 0 && h <= 23 && m >= 0 && m <= 59 && s >= 0 && s <= 59;
}

const horarios = [];

for (let i = 0; i < 5; i++) {
  let hora, minuto, segundo;
  console.log(`Informe o ${i + 1}º horário:`);

  while (true) {
    hora = parseInt(prompt('Hora (0-23): '));
    minuto = parseInt(prompt('Minuto (0-59): '));
    segundo = parseInt(prompt('Segundo (0-59): '));

    if (validarHorario(hora, minuto, segundo)) {
      horarios.push({ hora, minuto, segundo });
      break;
    } else {
      console.log("Horário inválido! Tente novamente.");
    }
  }
}

console.log("\nHorários informados:");
horarios.forEach((h, i) => {
  console.log(`${i + 1}º: ${String(h.hora).padStart(2, '0')}.${String(h.minuto).padStart(2, '0')}.${String(h.segundo).padStart(2, '0')}`);
});
