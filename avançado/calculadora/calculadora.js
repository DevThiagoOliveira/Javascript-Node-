const display = document.querySelector('.display');

function Caculadora(display) {
    
    this.display = display;

    this.clearDisplay = function() {
        this.display.value = '';
    }
    
    this.buttonForDisplay = function(button) {
        this.display.value += button;
    }
    
    this.erase = function() {
        this.display.value = this.display.value.slice(0, -1);
    }
    
    this.execute = function() {
        let result = this.display.value;
        
        try {
            result = eval(result);
    
            if(!result) {
                this.display.value = 'Invalid';
                return;
            }
    
            this.display.value = String(result);
        } catch(err) {
            this.display.value = 'Invalid'
            return;
        }
    }
}

const calculadora = new Caculadora(display);

document.addEventListener('click', function(event) {
    const button = event.target;

    if(button.classList.contains('btn-num')) {
        calculadora.buttonForDisplay(button.innerText);
    }

    if(button.classList.contains('btn-clear')) {
        calculadora.clearDisplay();
    }

    if(button.classList.contains('btn-delete')) {
        calculadora.erase();
    }

    if(button.classList.contains('btn-equal')) {
        calculadora.execute();
    }

    display.addEventListener('keyup', event => {
        if (event.keyCode === 13) {
          calculadora.execute();
        }
    });

    display.addEventListener('keydown', event => {
        if (event.keyCode === 8) {
          event.preventDefault();
          calculadora.erase();
        }
      });

    display.focus();
});

/*
function calculator() {
    document.addEventListener('click', function(event) {
        const button = event.target;

        if(button.classList.contains('btn-num')) {
            buttonForDisplay(button.innerText);
        }

        if(button.classList.contains('btn-clear')) {
            clearDisplay();
        }

        if(button.classList.contains('btn-delete')) {
            erase();
        }

        if(button.classList.contains('btn-equal')) {
            execute();
        }

        
    });
}

calculator();

function clearDisplay() {
    input.value = '';
}

function buttonForDisplay(button) {
    input.value += button;
}

function erase() {
    input.value = input.value.slice(0, -1);
}

function execute() {
    let result = input.value;
    
    try {
        result = eval(result);

        if(!result) {
            input.value = 'Invalid';
            return;
        }

        input.value = String(result);
    } catch(err) {
        input.value = 'Invalid'
        return;
    }
    
    // eval(); cuidado com o eval por que ele executa qualquer tipo de coisa que você manda por parametro a ela
}
*/