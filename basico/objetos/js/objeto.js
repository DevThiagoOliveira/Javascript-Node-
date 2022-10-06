const pessoa = { // para criar objetos de informações variaveis pode pode setar desta maneira aonde você cria um variavel, constante, etc e abre chaves e chama outras variaveis com dados
    // objetos são patricamente arrays, mas com variaveis que tem informações dentro
    nome: 'Thiago', 
    sobrenome: 'Augusto',
    idade: '22',
    sexo: 'masculino'
}

console.log(pessoa.nome, pessoa.sobrenome); // para você exibir as informações que estão dentro dessas variaveis você coloca . e o nome do objeto

//você também pode deixar isso automatico fazendo uma função factory( cria um dado fictício para você)

function criaPessoa(nome, sobrenome, idade, sexo) { // os parametros
    return {
        // quando você tem parametros com o nome do objeto igual você não precisa re declarar nome : nome
        nome,
        sobrenome,
        idade,
        sexo
    };
}

const Pessoa1 = criaPessoa('Weslay', '', '22', 'masculino'); // argumento da pessoa para o parametro da função
const Pessoa2 = criaPessoa('Jefferson', 'Goularte', '26', 'masculino');
console.log(Pessoa1.nome, Pessoa2.nome);

//também pode criar um function dentro de um object

const pessoaDiferente = {
    nome: 'Artur',
    sobrenome: '',
    idade: '22',
    sexo:'masculino',

    fala() {
        console.log(`Olá meu nome é ${this.nome}`); // this -> significa que neste objeto pessoaDiferente quero que você pegue para mim o nome
    }
}

pessoaDiferente.fala();