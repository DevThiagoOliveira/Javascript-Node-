const cronometro = document.querySelector('.cronometro');
const btIniciar = document.querySelector('.iniciar');
const btZerar = document.querySelector('.zerar');
const btPausar = document.querySelector('.pausar');

let estaPausado = true;

function zeroAEsquerda(numero) {
    return numero >= 10 ? numero : `0${numero}`;
}

const horas = {
    hora: 0, 
    minuto: 0, 
    segundo: 0
}

const contadorHoras = () => {
    horas.segundo++;

    if (horas.segundo === 60) {
        horas.segundo = 0;
        horas.minuto++;
    }

    if (horas.minuto === 60) {
        horas.minuto = 0;
        horas.hora++;
    }

    return `${zeroAEsquerda(horas.hora)}:${zeroAEsquerda(horas.minuto)}:${zeroAEsquerda(horas.segundo)}`;
};

const crono = setInterval(function() {
    if (estaPausado === false){
        cronometro.innerText = contadorHoras();
    }
}, 1);

btIniciar.addEventListener('click', function(event) {
    estaPausado = false;
    cronometro.style.color = 'white';
});

btZerar.addEventListener('click', function(event) {
    cronometro.innerText = '00:00:00';
    horas.hora = 0;
    horas.minuto = 0;
    horas.segundo = 0;
    estaPausado = true;
    cronometro.style.color = 'white';
});

btPausar.addEventListener('click', function(event) {
    estaPausado = true;
    cronometro.style.color = 'red';
});