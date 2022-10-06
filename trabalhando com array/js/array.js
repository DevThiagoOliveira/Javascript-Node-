const alunos = ['Thiago', 'Marta', 'Weslay', 'Artur'];
//               0         1        2         3
// Um array ele é um conjunto de dados em um mesmo local na memoria mas não juntos

alunos.push('Jubiraldo'); // adiciona um novo elemento no final de um array

alunos.unshift('Jeferson'); // adiciona um novo elemento no começo de um array

let removidoFinal = alunos.pop(); // remove um elemento no final de um array, como também é possivel salvar ela em uma variavel

let removidoComeco = alunos.shift(); // remove um elemento no começo de um array, como também é possivel salvar ela

console.log(alunos);

console.log(removidoComeco);

console.log(removidoFinal);

delete alunos[1]; // você pode excluir um elemento do array (Obs:. quando você deleta um indice no array, naquele ponto na memoria fica vazio)

// um array é um objeto indexado então caso você de um typeof nele ira retornar para você objeto

console.log(typeof alunos);

// mas se você checar ele para ver se é um array ira retornar true

console.log(alunos instanceof Array);