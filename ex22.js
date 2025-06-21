/*
22. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando
dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
número não determinado de pessoas e retorne a média de salário da população, a
média do número de filhos, o maior salário e o percentual de pessoas com salário até R$
350,00.
*/


const prompt = require('prompt-sync')();

function pesquisaPopulacional() {
  let totalSalario = 0;
  let totalFilhos = 0;
  let maiorSalario = 0;
  let countPessoas = 0;
  let countSalarioBaixo = 0;

  console.log("Digite os dados da população. Para encerrar, digite um salário negativo.");

  while (true) {
    const salario = parseFloat(prompt("Salário: R$ "));
    if (salario < 0) break;

    const filhos = parseInt(prompt("Número de filhos: "));

    totalSalario += salario;
    totalFilhos += filhos;
    countPessoas++;

    if (salario > maiorSalario) {
      maiorSalario = salario;
    }

    if (salario <= 350) {
      countSalarioBaixo++;
    }
  }

  if (countPessoas === 0) {
    console.log("Nenhum dado foi inserido.");
    return;
  }

  const mediaSalario = totalSalario / countPessoas;
  const mediaFilhos = totalFilhos / countPessoas;
  const percentualSalarioBaixo = (countSalarioBaixo / countPessoas) * 100;

  console.log("\nRESULTADOS DA PESQUISA:");
  console.log(`Média de salário da população: R$ ${mediaSalario.toFixed(2)}`);
  console.log(`Média do número de filhos: ${mediaFilhos.toFixed(2)}`);
  console.log(`Maior salário informado: R$ ${maiorSalario.toFixed(2)}`);
  console.log(`Percentual com salário até R$ 350,00: ${percentualSalarioBaixo.toFixed(2)}%`);
}

// Executa a função
pesquisaPopulacional();
