/*
    Função Construtora

    você instancia uma função ou um objeto recebendo parametros é usando destes parametros ele retorna o valor do parametro informado
    ou uma lógica feita, ele também pode ser usado para caso você queira instanciar uma função mas ele tem um ID que você não quer compartilhar 
    ou que o proprio objeto não tenha permissão de acessar aquele dado restrito.

    Sintaxe

    function MesmoNomeDaClasse(Parametro) {
        this.parametro = parametro
    }

    Chamada

    let objeto = new MesmoNomeDaClasse(parametro);

    Uso

    objeto.parametro;
*/

function Pessoa(nome, sobrenome) {
    // Atributo ou metodo privado
    const ID = 123456789; // ID pessoa deste objeto que não pode ser acessado;


    // Atributo ou metodo publico
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(`${this.nome}: é um atributo do objeto Pessoa`);
    }
}

let pessoa1 = new Pessoa('Thiago', 'Oliveira');
let pessoa2 = new Pessoa('Augusto', 'Oliveira');

pessoa1.metodo();