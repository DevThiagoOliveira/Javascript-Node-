// Declaração de função (Function hoisting)
falaOi(); // as funções pode ser chamadas antes de serem criadas

function falaOi() {
    console.log('Oi');
}

// First-class objects (Objeto de primeira classe)
// Function expression
const souUmDado = function() {
    console.log('Sou um dado.');
};
souUmDado();

// Arrow function 
const functionArrow = () => {
    console.log('Sou um arrow function');
};
functionArrow();

//Dentro de um objeto
const obj = {
    falar() {
        console.log('Estou falando....');
    },

    //jeito antigo
    antigo: function() {
        console.log('Jeito Antigo');
    }
};

obj.falar();
obj.antigo();