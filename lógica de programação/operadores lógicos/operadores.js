/*
Operadores lógicos

&& -> AND -> E - para ele retornar true todas as alternativas tem que ser true
|| -> OR -> Ou - ele retorna true se uma das alternativas for verdadeira
! -> NOT -> Não - ele sempre retorna o contrario, se for true ele transforma em false e vise versa

    são feitos para diversas coisas dependendo do seu código igual
    
    eu quero saber se minha variavel 1 é igual a variavel 2 mas também se ela e diferente a variavel 3
*/

const variavel1 = 5;
const variavel2 = 10;
const variavel3 = 16;

console.log((variavel1 === variavel2) && (variavel1 !== variavel3));

console.log(!(variavel1 === variavel3));

console.log(!!(variavel1 === variavel3)); /*
    não faz muito sentido mas você consegue negar duas vezes, ele retorna false por padrão ae ele vai ser true e depois false de novo
    tudo depende da sua lógica né
*/

/*
    o valor FALSE é um valor objetivo, ou seja em uma lógica de AND caso aja um FALSE ele já quebrou mas
    pode ocorrer de quando você fizer uma lógica no seu código ele retornar um valor FALSY o que seriam esses valores

FALSY:
0
NaN
undefined
'' "" `` string vazia
null

    esses valores não são falsos mas em uma lógica de programação caso aja algum deles ira retornar eles como um valor falso
    caso todos os valores forem true e tiverem dados dentro ele retorna o ultimo dado EX:.
    com o or ele retorna o primeiro e acaba ae EX:.
*/

console.log(0 && true && true);
console.log('maria' && 'joao' && 'cleiton'); // nesse caso retorna cleiton por que todos passaram true e ele e o ultimo com um dado
console.log(0 || false || NaN || 'trapezio descendente' || 'é ele');
