
/* o while executa o código enquanto a condição for true.++
while (condition) {
}
*/

let numero = 0;
while (numero <= 10) {
    console.log(numero);
    numero++;
}

// -------------------------------------------------------------------------------------------
console.log('\n-------------------------------------------------------------------------------\n');
/* o dowhile não tem muito segredo ele executa o código uma vez, e caso a condição não foi false ele repete. Muito útil para fazer menu
do {

} while (condition);
*/
numero = 0;
do {
    console.log(`${numero}`);
    numero++;
} while (numero <= 10);