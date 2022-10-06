const numero = Number(prompt('Digite um numero seja inteiro ou não')); // converter para numero por que o prompt 

const nomeTitulo = document.getElementById('numero-titulo');

const texto = document.getElementById('texto');

nomeTitulo.innerHTML = `O seu número é <strong>${numero}</strong>`;

texto.innerHTML = `
    <p>A raiz quadrada é <strong>${Math.sqrt(numero)}</strong></p>
    <p>${numero} é inteiro : <strong>${Number.isInteger(numero)}</strong>
    <p>${numero} é NaN : <strong>${Number.isNaN(numero)}</strong>
    <p>Arredondado para baixo fica <strong>${Math.floor(numero)}</strong></p>
    <p>Arredondado para cima fica <strong>${Math.ceil(numero)}</strong></p>
    <p>Com duas casas decimais fica <strong>${numero.toFixed(2)}</strong>
    `;