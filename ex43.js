/*
43. Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência
sobre as do obj1 em caso de conflitos.
*/

function combinarObjetos(obj1, obj2) {
    // Usamos spread operator para combinar,
    // propriedades de obj2 sobrescrevem as de obj1
    return { ...obj1, ...obj2 };
}

// Exemplo de uso:
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { b: 20, d: 4 };

const combinado = combinarObjetos(obj1, obj2);
console.log(combinado);

