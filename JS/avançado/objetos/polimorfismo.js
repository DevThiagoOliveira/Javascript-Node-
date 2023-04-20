/**
 * Acontece quando metodos filhos se comportam de jeitos diferentes mesmo herdando os métodos do pai
 */

function Conta(conta, agencia, saldo) {
    this.conta = conta;
    this.agencia = agencia;
    this.saldo = saldo;
}
Conta.prototype.sacar = function(valor) {
    if(this.valor > this.saldo) {
        console.log(`Saldo insuficiente: \nSaldo disponivel na conta: R$${this.saldo}`);
        return
    }

    this.saldo -= valor;
    this.verSaldo();
}
Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    console.log(`${valor.toFixed(2)} Depositado na conta | Saldo da conta: R$${this.saldo}`);
}
Conta.prototype.verSaldo = function() {
    console.log(`Agencia/Conta: ${this.agencia}/${this.conta} | Saldo Disponível R$${this.saldo}`);
}

function ContaCorrente(conta, agencia, saldo, limite) {
    Conta.call(this, conta, agencia, saldo);

    this.limite = limite;
}
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor) {
    if(this.valor > this.saldo && this.valor > this.limite) {
        console.log(`Saldo insuficiente: \nSaldo disponivel na conta: R$${this.saldo}`);
        return
    }

    this.saldo -= valor;
    this.verSaldo();
}

const conta1 = new Conta(2005418, 001, 100);
const contaCor1 = new ContaCorrente(2005641, 001, 100, 1000);
conta1.depositar(200);
conta1.sacar(200);
contaCor1.sacar(1000);

console.log(conta1);
console.log(contaCor1);