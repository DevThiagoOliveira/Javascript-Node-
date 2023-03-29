const input = document.querySelector('.display');

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