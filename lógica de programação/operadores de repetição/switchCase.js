const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// ele simplemente pega uma variavel que você informa e caso o valor dessa variavel seja uma dos casos ele executa esse caso Exemplo:. V
switch(numeros) {
    
    case 0:

        return 'numero zero'; //ou você pode usar return
    case 1:
        console.log('numero um');
        break; // ou o break logo depois da sua lógica, super importante usar o break se não ele executa sua lógica mesmo sendo o que ele procura ou não e parte para a proxima

    default: // também tem o default caso nenhuma delas for o valor que você informou ele executa o default
        return 'o numero não existe dentre dessa variavel';
}