const _velocidade = Symbol('valocidade'); // Symbol é um tipo de dado, ele semppre retorna um tipo diferente cada vez que é chamado
class Carro { 
    constructor(nome) {
        
        this.nome = nome;
        this[_velocidade] = 0;
    }

    get velocidade() {
        return this[_velocidade];
    }

    set velocidade(valor) {
        if((valor < 0) || (valor > 100) || (typeof valor !== 'number')) return;

        this[_velocidade] = valor;
    }

    acelerar() {
        if(this[_velocidade] >= 100) return;
        
        this[_velocidade]++;
    }
    
    desacelerar() {
        if(this[_velocidade] <= 0) return;
        
        this[_velocidade]--; 
    }
}

const fusca = new Carro('fusca');
fusca.velocidade = 100;
console.log(fusca.velocidade);