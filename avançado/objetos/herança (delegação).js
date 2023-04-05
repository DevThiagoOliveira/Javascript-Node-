/**
 * Digamos que você tem 3 objetos para vender em uma loja virtual (E commerce), e você quer fazer com que elas tenhas métodos similares
 * mas que você possa alterar e também possa criar construtores para cada objeto. Você pode simplificar esses seus 3 objetos em uma coisa
 * so e depois especificar este objeto central em outros.
 * 
 * Exemplo:.
 * 
 * Tenho 3 objetos Camisa, Caneca, Controlhe
 * 
 * e quero que os 3 tenham metodos similares mas que eu possa distinguir cada um e criar mais atributos para cada um deles
 * 
 * então posso simplesmente criar uma função que representa os 3 que seria produto e cada um dele é um construtor diferente que tem os atributos de produto
 * e seus proprios atributos
 */

function Produto(nome, valor) {
    this.nome = nome;
    this.valor = valor;
}
Produto.prototype.aumentarValor = function(valorAumento) {
    this.valor += valorAumento;
}
Produto.prototype.dimiuirValor = function(valorDiminuir) {
    this.valor -= valorDiminuir;
}

function Caneca(nome, valor, marca) {
    // aqui eu linko os atributos da minha classe global com os atributos da classe de ramificação, e depois posso colocar os atributos que ela mesmo tera de diferente das outras
    Produto.call(this, nome, valor);

    this.marca = marca;
}

function Camisa(nome, valor, marca, cor) {
    Produto.call(this, nome, valor);

    this.marca = marca;
    this.cor = cor;
}

function Controlhe(nome, valor, marca, cor, modelo) {
    Produto.call(this, nome, valor);

    this.marca = marca;
    this.cor = cor;
    this.modelo = modelo;
}
/** 
 * Mas com somente a ramificação do produto não vai ter os meus métodos aumentarValor e diminuirValor por que o prototype deles são diferentes
 * eu quero que o prototype da caneca tenha os mesmos métodos do produto mas que continue sendo o prototype da caneca
 * so quero copiar os métodos então basta copiar com object.create(Produto.prototype) deste jeito ele cria um objeto vazio com todos os métodos
 * do produto e depois armazene dentro da caneca. Mas fazendo isso ele fara com que a classe construtora da caneca seja produto,
 * então eu digo que o constructor da caneca é Caneca
*/
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

Camisa.prototype = Object.create(Produto.prototype);
Camisa.prototype.constructor = Camisa;

Controlhe.prototype = Object.create(Produto.prototype);
Controlhe.prototype.constructor = Controlhe;

// agora eu posso alterar o método do prototype da caneca sem mexer no método do Produto
Caneca.prototype.aumentarValor = function(percentual) {
    this.valor = this.valor + ( this.valor * (percentual / 100));
}

Camisa.prototype.aumentarValor = function(percentual) {
    this.valor = this.valor - ( this.valor * (percentual / 100));
}

const produto1 = new Produto('Generico', 10);
const caneca1 = new Caneca('Caneca', 150, 'Stanley');
const camisa1 = new Camisa('Camisa', 50, 'Seilá', 'Branca');
const controlhe1 = new Controlhe('Controlhe', 350, 'Playstation', 'Branco', 'Pro');

produto1.aumentarValor(100); // o aumento do produto vai ser em 100 reais
caneca1.aumentarValor(100); // e da caneca vai ser em 100 porcento do valor

camisa1.dimiuirValor(20);
controlhe1.dimiuirValor(200);


console.log(produto1);
console.log(caneca1);
console.log(camisa1);
console.log(controlhe1);