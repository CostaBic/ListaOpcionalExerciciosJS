/*
48. Você recebe dois objetos que representam o inventário de duas lojas diferentes:
inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse
item em estoque. Escreva uma função que combine os inventários em um único objeto.
Se um item aparecer em ambas as lojas, some as quantidades.
*/


function combinarInventarios(inventarioA, inventarioB) {
  const combinado = { ...inventarioA };

  for (const item in inventarioB) {
    if (combinado.hasOwnProperty(item)) {
      combinado[item] += inventarioB[item];
    } else {
      combinado[item] = inventarioB[item];
    }
  }

  return combinado;
}

// Exemplo de uso:
const inventarioLojaA = {
  arroz: 10,
  feijao: 5,
  macarrao: 7
};

const inventarioLojaB = {
  feijao: 3,
  macarrao: 2,
  óleo: 8
};

const inventarioTotal = combinarInventarios(inventarioLojaA, inventarioLojaB);
console.log(inventarioTotal);
// Saída: { arroz: 10, feijao: 8, macarrao: 9, óleo: 8 }
