const formulatio = document.querySelector('#form');

formulatio.addEventListener('submit', function (event) {
    event.preventDefault();

    const inputPeso = event.target.querySelector('#peso'); // event.target pega exatamente aonde você está clicando
    const inputAltura = event.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso || peso > 595) {
        setResultado('Peso Inválido', false);
        return;
    }

    if(!altura || altura > 3.00) {
        setResultado('Altura Inválida', false);
        return;
    }

    const imc = getImc(peso, altura);

    nivelIMC(imc);
});

function nivelIMC(value) {
    if(value < 18.5) {
        return setResultado('Abaixo do peso', true);
    }

    if(value > 18.5 && value < 24.9) {
        return setResultado('Peso Normal', true);
    }

    if(value > 25 && value < 29.9) {
        return setResultado('Sobrepeso', true);
    }

    if(value > 30 && value < 34.9) {
        return setResultado('Obesidade grau 1', true);
    }

    if(value > 35 && value < 39.9) {
        return setResultado('Obesidade grau 2', true);
    }

    if(value > 40) {
        return setResultado('Baleia, Mamute, Titanic', true);
    }
}

function getImc (peso, altura) {
    const resultado = peso / altura ** 2;
    return resultado.toFixed(2);
}

function setResultado (msg, valid) {

    const resultado = document.querySelector('#resultado');
    const paragrafo = document.createElement('p'); // criar um elemento html <p></p>

    resultado.innerHTML = '';

    if (valid) {
       paragrafo.classList.add('result-sucess'); // criar uma classe dentro deste elemento <p> 
    } else {
        paragrafo.classList.add('result-danger'); // criar uma classe dentro deste elemento <p> 
    }
    
    paragrafo.innerHTML = msg;
    resultado.appendChild(paragrafo); //adicionar dentro do elemento ou seja <div> AQUI </div>
}