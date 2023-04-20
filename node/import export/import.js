/**
 * e para importar aqui não é import e sim required(''); você faz a requisição do que você quer importar
 * 
 * para importar uma API basta chama o nome dela, não precisa infomar o caminho que você já estara utilizando a API
 */

// const obj = require('./export'); // agora você tem todos os objetos ou funções exportados do seu arquivo
const { nome, falaNome } = require('./export'); // ou você pode importar somente o que vai usar fazendo desde modo

console.log(falaNome());

