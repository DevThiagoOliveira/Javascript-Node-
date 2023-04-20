/*

você pode fazer praticamente um if else com operadores ternários, como funciona:.
    
    (condição) ? 'Valor Verdadeiro' : 'Valor Falso';

Exemplo na pratica
*/
const button = 1;
const precionado = button >= 1 ? 'Botão apertado' : 'Botão não apertado';

console.log(precionado);

/*
Também funciona com Or - Ou
*/

const Cor = null;
const escolhaCor = Cor || 'Preto'; // se a cor padrão for false ou falsy ele vai colocar preto como escolha

console.log(escolhaCor);