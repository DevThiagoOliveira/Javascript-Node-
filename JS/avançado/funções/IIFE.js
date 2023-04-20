// IIFE = Immediately invoked function expression
/* 
    Uma função auto declarada que não toca o escopo global. Isso que o IIFE é

    Sintaxe
    (function() {})(); você coloca (); no final para já executar e função de imediato 
*/

const nome = 'Thiago';

(function(nome) {
    // aqui dentro você pode fazer N coisas é uma função normal so não toca o escopo global
    console.log(nome);

})(nome); // pode receber parametros também