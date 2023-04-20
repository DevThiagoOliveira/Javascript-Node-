
const nomes = ['Thiago', 'Rogerio', 'Vincent', 'Mauricio', 'Albert'];

/* 
    SPLICE no primeiro parametros do metodo splice o você tem que selecionar o INDICE inicial que você quer começar a mexer,
    o segundo argunto é quantos você quer remover do seu array

    nomes.splice(índice, delete, elementos para adicionar, elemento 2, lemeneto 3, infinito);
*/

const removidos = nomes.splice(-1, 1, 'Thiago', 'Augusto'); // no ultimo indice -1 você remove um e adiciona Thiago e Augusto
console.log(nomes, removidos);