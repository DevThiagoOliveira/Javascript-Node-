let num1 = 20;
let num2 = 3205.4565316848531;

num1 = num1.toString() + num2; // quando você trata uma string com um numero, o codigo não trata mais o segundo numero como numero e sim string

console.log(typeof num1);

num1 = 30;

console.log(num1.toString(2)); // o toString também te da o binario do numero que voce indicou basta colocar 2 por referencia

console.log(num2.toFixed(2)); // você tambem pode indicar quantas casas decimais deixar para aparecer basta colocar a quantidade por referencia (Obs:. ele arredonda)

console.log(Number.isInteger(num1)); // também da para verificar se o numero é inteiro, no caso ele retorna booleano

console.log(Number.isNaN(num1 + 'oi')); // também da para verificar se a conta é válida se não for valido o resultado é um NaN, nesse caso atual ele retorna true e um NaN
