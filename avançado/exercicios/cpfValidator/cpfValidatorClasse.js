// CPF Gerado na net: 705.484.450-52 | 070.987.720-03
class CPF {
    constructor(cpf) {
        Object.defineProperty(this, 'cpfOnly', {
            enumerable: true,
            configurable: false,
            writable: true,
            value: cpf.replace(/\D+/g, ''),
        });
    }

    get cpf() {
        return `CPF: ${this.cpfOnly}`;
    }

    set cpf(cpf) {
        if(typeof cpf !== 'string') return;

        let cpfLimpo = cpf.replace(/\D+/g, '');

        if(CPF.isSequence(cpfLimpo)) return;
        if(cpfLimpo.length !== 11) return;
        
        this.cpfOnly = cpfLimpo;
    }
    
    validator() {
        if(typeof this.cpfOnly !== 'string') return;
        if(this.cpfOnly.length !== 11) return;
        if(CPF.isSequence(this.cpfOnly)) return;

        const cfpParcial = this.cpfOnly.slice(0, -2);
    
        const digit01 = CPF.checkDigit(cfpParcial);
        const digit02 = CPF.checkDigit(cfpParcial + digit01);

        const cpfInteiro = cfpParcial + digit01 + digit02;

        return cpfInteiro === this.cpfOnly ? 'CPF Válido' : 'CPF Inválido';
    }

    static checkDigit(cpfParcial) {
        const cpfArray = Array.from(cpfParcial);
        let count = cpfArray.length + 1;
        
        const soma = cpfArray.reduce((acumulator, value) => {
            acumulator += ( Number(value) * count );
            
            count--;
            return acumulator
        }, 0);
        
        const primeiroDigito = 11 - (soma % 11);
        return primeiroDigito > 9 ? 0 : String(primeiroDigito); 
    }

    static isSequence(cpf) {
        return cpf.charAt(0).repeat(cpf.length) === cpf;
    }

}

const cpf = new CPF('705.484.450-52');
// cpf.cpf = '111.222.333-45';
console.log(cpf.cpf);
console.log(cpf.validator());