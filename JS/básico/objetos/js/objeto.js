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

// Atribuição via desestruturação

const serHumano = { // para criar objetos de informações variaveis pode pode setar desta maneira aonde você cria um variavel, constante, etc e abre chaves e chama outras variaveis com dados
    // objetos são patricamente arrays, mas com variaveis que tem informações dentro
    nome: 'Thiago', 
    sobrenome: 'Augusto',
    idade: '22',
    sexo: 'masculino',
    endereco: {
        rua: 'Leopoudina',
        numero: '1000',
        bairro: 'Antonieta'
    }
}

const { nome, sobrenome, idade , cep = 'não atribuido'} = serHumano;

console.log(nome, sobrenome, idade, cep);

// também da para mudar o nome da sua variavel caso queira

const { nome: teste = ''} = serHumano;

console.log(teste); // visto que o retorno foi "Thiago" pois o valor que está atribuido dentro da variavel é "Thiago", caso não tenha nenhum valor ele retorna ""

// ou também da para acessar um objeto dentro de outro objeto como o endereço

const { endereco: { rua = 'Av:. Brasil', numero: n = 0}, endereco } = serHumano; //so para mostrar que da para atribuir valores padrões dentro do objeto do objeto e mudar o nome da variavel

console.log(rua, n);

//mas não quer dizer que não possa usar o objeto completo
console.log(endereco);

// o REST também funciona

const {nome: name, ...resto} = serHumano;

console.log(resto);