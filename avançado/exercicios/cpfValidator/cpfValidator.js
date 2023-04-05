// 705.484.450-52 | 070.987.720-03

function CPF(informarCpf) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function() {
            return informarCpf.replace(/\D+/g, ''); // /\D+/g pega tudo que não é numero
        }
    });
}
CPF.prototype.validator = function() {
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.isSequenci()) return false;
    
    const cfpParcial = this.cpfLimpo.slice(0, -2);
    
    const digito1 = this.criarDigito(cfpParcial);
    const digito2 = this.criarDigito(cfpParcial + digito1);

    const cpfInteiro = cfpParcial + digito1 + digito2;

    return cpfInteiro === this.cpfLimpo ? 'CPF Válido' : 'CPF Inválido';
}
CPF.prototype.criarDigito = function(cpfParcial) {
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
CPF.prototype.isSequenci = function() {
    return this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo;
}

const cpf1 = new CPF('158.889.457-02');

console.log(cpf1.validator());