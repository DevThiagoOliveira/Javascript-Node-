/*
    Assign você pode usar para copiar os valores de um objeto para outro objeto

    Sintaxe:
            
    Object.assign({}, objQueQueroCopiar, outroObj, outroObj, .....); 

    e todos oeles seriam copiados para o primeiro target aberto, então se você atribuisse ele a uma variavel aquela variavel seria um objeto
    com todos os dados copiados para ela
*/

const produto = { nome: 'Camisa', valor: 50};

const copo = Object.assign({}, produto, { material: 'vidro'}, { marca: 'seiLá', uso: 'Tomar Cachaça'},);

copo.nome = 'Copo Americano';


console.log(copo);