let num1 =  9.5542;

let arredondarBaixo = Math.floor(num1); // como o nome da variavel ele arredonda o numero para baixo
let arredondarCima = Math.ceil(num1); // como o nome da variavel ele arredonda o numero para cima
let arredondaMaisProximo = Math.round(num1);

console.log(arredondarBaixo);
console.log(arredondarCima);
console.log(arredondaMaisProximo);
console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // ele te retorna o maior numero dessa sequencia de numeros
console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9 ,10)); // ele te da o menos numero dessa sequencia de numeros
console.log(Math.random()); // ele gera um numero aleatorio entre 0 e 1 com varias casas decimais

console.log(Math.PI); // ele te retorna o numero de PI

//demonstração de como você pode usar esses metodos

const aleatorio = Math.round(Math.random() * (20 - 10) + 10); // ele sempre trara uma numero aleatorio entre 10 e 20

console.log(aleatorio);