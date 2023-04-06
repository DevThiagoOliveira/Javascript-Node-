class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligando() {
        if(this.ligado) {
            console.log(`${this.nome} já ligado`)
            return;
        }

        console.log(`ligando ${this.nome}`);
        this.ligado = true;
    }

    desligando() {
        if(this.ligado === false) {
            console.log(`${this.nome} já desligado`)
            return;
        }

        console.log(`desligando ${this.nome}`);
        this.ligado = false;
    }
}

/**
 * para fazer a herança aqui no JS é simples funciona do mesmo jeito que no JAVA basta dar extends na classe que quer herdar
 * e se você for fazer um construct nessa nova classe chamar o Super(nome dos atributos que deseja linkar); se não usar o Super você tera que re-declarar tudo de novo
 */

class Smartphone extends DispositivoEletronico {
    constructor(nome, modelo, cor, usuario) {
        super(nome);
        this.modelo = modelo;
        this.cor = cor;
        this.usuario = usuario;
    }

    abrirStore() {
        return console.log(`abrindo a loja no usuario: ${this.usuario}`);
    }
}

const pc = new DispositivoEletronico('Computador');
const iPhone = new Smartphone('Iphone', 14, 'Preto', 'Thiago');

console.log(pc);
console.log(pc.ligando());
console.log(iPhone);
console.log(iPhone.abrirStore());