/** 
 * digamos que você queira alterar mexer na ordenação de um array com objetos
 * você pode fazer isso com o objeto Map dando GET e SET para pegar ou alterar o valor
*/

const object = [
    {id: 2, nome:'Thiago'},
    {id: 1, nome:'Afonso'},
    {id: 3, nome:'Jusefino'}
];

const novasPessoas = new Map();

for (const pessoas of object) {
    const { id } = pessoas;

    novasPessoas.set(id, { ...pessoas});

}

for (const [ id, { nome }] of novasPessoas) { // desmenbrando um array ou objeto | não é muito útil se você está mexendo com muitos dados
    console.log(id, nome);
}