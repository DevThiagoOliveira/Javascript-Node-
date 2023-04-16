import CPF from './CPF';

export default class GeraCPF {
    rand( min = 100000000, max = 999999999) {
        return String(Math.floor(Math.random() * (max - min) + min));
    }

    geraNovoCPF() {
        const cpfSemDigito = this.rand();
        const digito1 = CPF.checkDigit(cpfSemDigito);
        const digito2 = CPF.checkDigit(cpfSemDigito + digito1);
        const novoCPF = cpfSemDigito + digito1 + digito2;

        return this.formatado(novoCPF);
    }

    formatado(cpf) {
        return (
            cpf.slice(0, 3) + '.' +
            cpf.slice(3, 6) + '.' +
            cpf.slice(6, 9) + '-' +
            cpf.slice(9, 11)
        );
    }
}