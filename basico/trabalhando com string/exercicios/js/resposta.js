const nome = prompt("digite o seu nome completo com espaços");

/* jeitos de mostrar no proprio documento o que você escreveu

console.log(`seu nome é ${nome}`); // console apenas

document.write(`seu nome é ${nome} \n`); // escreve no documento, no caso na tela

window.document.write(`seu nome é ${nome}\n`); // caso não esteja usando node


document.body.innerHTML += `Seu nome é ${nome} <br />`; // este e o mais recomendavel você usar para ele escrever dentro do Body
*/


document.body.innerHTML += `Seu nome é ${nome} <br />`;
document.body.innerHTML += `Tem ${nome.length} caracteres <br />`;
document.body.innerHTML += `Segunda letra do seu nome ${nome[1]} <br />`;
document.body.innerHTML += `Primeiro indice que aparece o A ${nome.indexOf([/[a,A]/])} <br />`;
document.body.innerHTML += `Ultimo indice que aparece o A ${nome.lastIndexOf(/[a,A]/), -1} <br />`;
document.body.innerHTML += `As 3 ultimas letras são ${nome.slice(-3)} <br />`;
document.body.innerHTML += `As palavras do nome são ${nome.split(' ')} <br />`;
document.body.innerHTML += `As letras minusculas ${nome.match(/[a-z]/g)} <br />`;
document.body.innerHTML += `As letras maiusculas ${nome.match(/[A-Z]/g)} <br />`;
document.body.innerHTML += `Com letras minusculas ${nome.toLowerCase} <br />`;
document.body.innerHTML += `Com letras maiusculas ${nome.toUpperCase} <br />`;
