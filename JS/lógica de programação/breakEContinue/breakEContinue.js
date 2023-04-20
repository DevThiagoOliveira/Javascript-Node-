let numeros = 0;
const arrayNumeros = [];

while (numeros <= 999) {
    arrayNumeros[numeros] = numeros;
    numeros++;
}

/* 

    O continue ele pula para a próxima interação de um laço,possa ser que você queira 
    pular algum valor de um array no código e ir para a proxima interação do loop
    você pode usar o continue para isso.

    Já o break ele sair do laço, exemplo se eu quiser pegar so até 50 numeros
    e não quero que o meu código execute até o 999, posso dar um break.
    
*/
for (const numero of arrayNumeros) {

  if(numero % 2) {
    console.log(`${numero} é impar`);
    continue;
  }

  if(numero === 50) {
    break;
  }

  console.log(`${numero} é par`); // ele não exibiu o 50, pois o loop quebrou antes dele executar esta linha de código
}
