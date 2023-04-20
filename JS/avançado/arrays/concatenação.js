const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const juncao = array1.concat(array2); // se você quiser juntar 2 arrays você coloca .concat(arraySeguninte), pois diferente disso ele ira fazer a junção dos valores não dos arrays
// também consegue com o rest operator

const juncao2 = [...array1, ...array2, ...['a', 'r', 'r', 'a', 'y']];

console.log(juncao, juncao2);