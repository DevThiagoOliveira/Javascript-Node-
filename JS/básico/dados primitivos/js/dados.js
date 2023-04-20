/*
Dados Primitivos (eles são imutáveis:. não podem ser mudados) - String, Number, Boolean, Undefined, Null, Bigint, Symbol.

Dados Referencia (mutaveis) - Array, Object, Function | passados por referencia

mudar o valor de uma variável não é mudar o dado que está dentro dela exemplo

let nome  = "Thiago";
nome[0] = A; nesse caso está ação não fara nada, por que o tipo de dado é imutavel ele continuara mostrando T
console.log(nome[0]); sera exibido para você T, mas e se você colocar um nome[0] = A antes

Agora variaveis por referencia são mutaveis Ex:.

let dado1 = [1, 2, 3];

let dado2 = dado1;

console.log(dado1, dado2);

dado1.push(4); adicionando o numero 4 ao final do array
console.log(dado1, dado2); você observara que o dado 1 e 2 teram o nmero 4 no final de seus arrays, isso por eles apontarem para o mesmo local na memoria

Agora se você não quiser copiar um dado para outra variavel mesmo ele passando por referencia o dado basta colocar [...nome da varaivel]
*/

let base = [1, 2, 3];

let copiaBase = [...base];

let referenciaBase = base;

base.push('referencia');

console.log(base, referenciaBase, copiaBase); // agora base e o valor principal, copiaBase é a copia dele, e refenciaBase e a varaivel que esta apontando para base

//é isso acontece até com objetos, Então agora você sabe diferenciar.