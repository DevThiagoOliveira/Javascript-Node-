function relogio() { 
    const cronometro = document.querySelector(".cronometro");

    let estaPausado = true;

    const horas = {
        hora: 0,
        minuto: 0,
        segundo: 0,
    };

    function zeroAEsquerda(numero) {
        return numero >= 10 ? numero : `0${numero}`;
    }

    const mudarCorTexto = (cor = "white") => {
        cronometro.style.color = cor;
    };

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

    const crono = setInterval(function () {
        if (estaPausado === false) {
            cronometro.innerText = contadorHoras();
        }
    }, 1000);

    document.addEventListener("click", function (event) {
        const element = event.target;

        if (element.classList.contains("iniciar")) {
            estaPausado = false;
            mudarCorTexto();
        }

        if (element.classList.contains("pausar")) {
            estaPausado = true;
            mudarCorTexto("red");
        }

        if (element.classList.contains("zerar")) {
            cronometro.innerText = "00:00:00";
            horas.hora = 0;
            horas.minuto = 0;
            horas.segundo = 0;
            estaPausado = true;
            mudarCorTexto();
        }
    });
}

relogio();