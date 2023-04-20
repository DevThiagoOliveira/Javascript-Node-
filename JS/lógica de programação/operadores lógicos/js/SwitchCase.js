const data = new Date();
const diaSemana = data.getDay();

switch (diaSemana) {
    case 1:
            console.log('Hoje é Segunda-feira');
        break;

    case 2:
            console.log('Hoje é Terça-feira');
        break;

    case 3:
            console.log('Hoje é Quarta-feir a');
        break;

    case 4:
            console.log('Hoje é Quinta-feira');
        break;

    case 5:
            console.log('Hoje é Sexta-feira');
        break;

    case 6:
            console.log('Hoje é Sabado-feira');
        break;

    case 0:
            console.log('Hoje é Domingo-feira');
        break;

    default:
        console.log('Erro');
        break;
}