/*

const data = new Date();
const diaSemana = data.getDay();
const diaMes = data.getDate();
const mes = data.getMonth();
const ano = data.getFullYear();
const horas = zeroAEsquerda(data.getHours()) + ":" + zeroAEsquerda(data.getMinutes());

function getDiaSemana (diaSemana) {
    let diaTextSemana;
    
    switch (diaSemana) {
        case 1:
            diaTextSemana = 'Segunda-feira';
            return diaTextSemana;

        case 2:
            diaTextSemana = 'Terça-feira';
            return diaTextSemana;

        case 3:
            diaTextSemana ='Quarta-feira';
            return diaTextSemana;

        case 4:
            diaTextSemana = 'Quinta-feira';
            return diaSemana;

        case 5:
            diaTextSemana = 'Sexta-feira';
            return diaSemana;

        case 6:
            diaTextSemana = 'Sabado-feira';
            return diaSemana;

        case 0:
            diaTextSemana = 'Domingo-feira';
            return diaSemana;

        default:
            return 'Error function getDiaSemana';
    }
}

function getMes (mes) {
    let textMes;
    
    switch (mes) {
        case 1:
            textMes = 'Fevereiro';
            return textMes;

        case 2:
            textMes = 'Março';
            return textMes;

        case 3:
            textMes ='Abril';
            return textMes;

        case 4:
            textMes = 'Maio';
            return textMes;

        case 5:
            textMes = 'Junho';
            return textMes;

        case 6:
            textMes = 'Julho';
            return textMes;

        case 7:
            textMes = 'Agosto';
            return textMes;

        case 8:
            textMes = 'Setembro';
            return textMes;

        case 9:
            textMes = 'Outubro';
            return textMes;

        case 10:
            textMes = 'Novembro';
            return textMes;

        case 11:
            textMes = 'Dezembro';
            return textMes;

        case 0:
            textMes = 'Janeiro';
            return textMes;

        default:
            return 'Error function getMes';
    }
}

function zeroAEsquerda(numero) {
    return numero >= 10 ? numero : `0${numero}`;
}

let diaTextDiaSemana = getDiaSemana(diaSemana);

let dataFormatada = `${diaTextDiaSemana}, ${diaMes} de ${getMes(mes)} de ${ano} as ${horas}`;

const dataHTML = document.querySelector('.data');

dataHTML.innerHTML = dataFormatada;


ou também
*/

const dataHTML = document.querySelector('.data');
const data = new Date();

dataHTML.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full' });