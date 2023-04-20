
function maiorMenor(primeiroNum ,segundoNum) {
    if(primeiroNum > segundoNum) {
        return console.log(`O primeiro número = ${primeiroNum} é maior que o segundo número = ${segundoNum}`);
    }
    return console.log(`O segundo número = ${segundoNum} é maior que o primeiro número = ${primeiroNum}`);
}

maiorMenor(5, 3);
maiorMenor(7, 10);
maiorMenor(47, 19);
maiorMenor(8, 19);