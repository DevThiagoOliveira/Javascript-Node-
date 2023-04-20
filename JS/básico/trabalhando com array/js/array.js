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

// da para você criar variaveis em forma de array e atribuir valores a ela em array também

const [a ,b, c] = [1, 2, 3];

console.log(a, b, c);

// também da para puxar valores de um array para a variavel, pela ordem dos indices

const numeros = [100, 200, 300, 400, 500];

const [primeiro, segundo, terceiro, quarto, quinto] = numeros;

console.log(quinto, quarto, terceiro, segundo, primeiro);

// também da para pegar o resto de um array

const [um, dois, ...resto] = numeros;

console.log(um, dois, resto);

// lista dentro de lista

//                    0                 1                2
//               0    1     2      0    1    2      0    1    2
const lista = [['A' ,'B' , 'C'], ['F', 'G', 'H'], ['I', 'J', 'K']];

const lista1 = lista[0][0];
const lista2 = lista[0][1];
const lista3 = lista[0][2];

console.log(lista1, lista2, lista3);