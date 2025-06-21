/*
20. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
Matrícula:
Nome:
Salário bruto:
Dedução INSS:
Salário líquido:
(Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
INSS).
*/

const prompt = require('prompt-sync')();

const TOTAL_FUNCIONARIOS = 3;
const DESCONTO_INSS = 0.12;

for (let i = 0; i < TOTAL_FUNCIONARIOS; i++) {
  console.log(`\n--- Funcionário ${i + 1} de ${TOTAL_FUNCIONARIOS} ---`);

  const matricula = prompt("Matrícula: ").trim();
  const nome = prompt("Nome: ").trim();
  const salarioBruto = parseFloat(prompt("Salário bruto: R$ "));

  if (isNaN(salarioBruto) || salarioBruto <= 0) {
    console.log("Salário inválido. Pulei esse funcionário.");
    continue;
  }

  const deducaoINSS = salarioBruto * DESCONTO_INSS;
  const salarioLiquido = salarioBruto - deducaoINSS;

  console.log("\n--- CONTRACHEQUE ---");
  console.log(`Matrícula: ${matricula}`);
  console.log(`Nome: ${nome}`);
  console.log(`Salário bruto: R$ ${salarioBruto.toFixed(2)}`);
  console.log(`Dedução INSS (12%): R$ ${deducaoINSS.toFixed(2)}`);
  console.log(`Salário líquido: R$ ${salarioLiquido.toFixed(2)}`);
  console.log("----------------------");
}
