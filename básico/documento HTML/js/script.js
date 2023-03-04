
const titulo = 'Titulo deste tuto'

const cabecalho = document.getElementById('cabeca'); // para pegar o id do HTML e trata ele no JavaScript

cabecalho.innerHTML = titulo; // aqui eu estou fazendo o hmtl mudar via JS

// ----------------------

const melhorJeito = document.querySelector('.cabeca'); // o melhor jeito de você chamar um elemento do HTML
/*

o melhor jeito de selecionar um elemento é deste jeito pois você pode chamar ele via classe ou id com os sufixos CSS

. Classe
# ID

*/
