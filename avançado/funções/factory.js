// Factory function (Função fábrica)
// Constructor function (Função construtora)
function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,

    // Getter - dentro de um objeto você pode fazer funções funcionarem como se fossem atributos colocar a parada get antes da função, sendo assim ela vira um GETTER e você chama ele sem os () no final
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },

    // Setter - você pega o metodo GETTER sintaxe dele é: com o mesmo nome você seta um valor, para quando você receber esse valor ele retorna no GETTER
    set nomeCompleto(valor) {
      valor = valor.split(' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ');
    },

    // já visto antes você fazendo uma função dentro de um objeto
    fala(assunto = 'falando sobre NADA') {
      return `${this.nome} está ${assunto}.`;
    },

    altura,
    peso,

    // Getter
    get imc() {
      const indice = this.peso / (this.altura ** 2);
      return indice.toFixed(2);
    }
  };
}

const pessoa1 = criaPessoa('Thiago', 'Augusto', 1.8, 80);
const pessoa2 = criaPessoa('João', 'Pessoa', 1.90, 57);
const pessoa3 = criaPessoa('Junior', 'Oliveira', 1.5, 110);

console.log(pessoa1.imc);
console.log(pessoa2.imc);
console.log(pessoa3.imc);
console.log(pessoa1.nomeCompleto);
console.log(pessoa1.nome);
