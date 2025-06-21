/*
46. Suponha que você tem um array de objetos onde cada objeto representa uma venda
com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total
de vendas por vendedor.
*/


function totalVendasPorVendedor(vendas) {
  const resumo = {};

  for (const venda of vendas) {
    const vendedor = venda.vendedor;
    const valor = venda.valor;

    if (resumo[vendedor]) {
      resumo[vendedor] += valor;
    } else {
      resumo[vendedor] = valor;
    }
  }

  return resumo;
}

// Exemplo de uso:
const vendas = [
  { vendedor: "Ana", valor: 100 },
  { vendedor: "Carlos", valor: 200 },
  { vendedor: "Ana", valor: 150 },
  { vendedor: "Beatriz", valor: 300 },
  { vendedor: "Carlos", valor: 100 },
];

const resumoVendas = totalVendasPorVendedor(vendas);
console.log(resumoVendas);
// Saída: { Ana: 250, Carlos: 300, Beatriz: 300 }
