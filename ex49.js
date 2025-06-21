/*
49. Você recebe um array de objetos representando transações financeiras. Cada
transação possui id, valor, data, e categoria. Escreva uma função que retorne um objeto
onde as chaves são as categorias, e os valores são arrays de transações pertencentes a
essa categoria. Adicionalmente, inclua um subtotal de valores por categoria.
*/

// Função que agrupa transações por categoria e soma os subtotais
function agruparTransacoesPorCategoria(transacoes) {
  const resultado = {};

  for (const t of transacoes) {
    const categoria = t.categoria;

    if (!resultado[categoria]) {
      resultado[categoria] = {
        transacoes: [],
        subtotal: 0
      };
    }

    resultado[categoria].transacoes.push(t);
    resultado[categoria].subtotal += t.valor;
  }

  return resultado;
}

// Função para imprimir objetos complexos de forma bonita no terminal
function imprimirObjetoFormatado(obj) {
  console.log(JSON.stringify(obj, null, 2));
}

// Exemplo de uso
const transacoes = [
  { id: 1, valor: 100, data: "2025-06-01", categoria: "alimentação" },
  { id: 2, valor: 50, data: "2025-06-02", categoria: "transporte" },
  { id: 3, valor: 200, data: "2025-06-03", categoria: "alimentação" },
  { id: 4, valor: 75, data: "2025-06-04", categoria: "lazer" },
  { id: 5, valor: 30, data: "2025-06-05", categoria: "transporte" }
];

// Agrupar e imprimir o resultado
const agrupado = agruparTransacoesPorCategoria(transacoes);

console.log("Resultado agrupado por categoria:\n");
imprimirObjetoFormatado(agrupado);
