const fs = require('fs').promises; // você pode forçar ele retornar uma promise com /promises ou .promises
const { stat } = require('fs');
const path = require('path');

// Você pode usar o fs (fileSystem) para ler arquivos, pastas, criar arquivos, pastas, e muitas outras coisas  https://nodejs.org/api/fs.html | https://www.w3schools.com/nodejs/nodejs_filesystem.asp

fs.readdir(path.resolve(__dirname))
    .then(files => console.log(files))
    .catch(e => console.log(e));


async function readdir(caminhoRaiz) {
    caminhoRaiz = caminhoRaiz || path.resolve(__dirname);

    const files = await fs.readdir(caminhoRaiz);
    walk(files, caminhoRaiz);
}

async function walk(arquivos, caminhoRaiz) {
    for(let arquivo of arquivos) {
        const caminhoCompleto = path.resolve(caminhoRaiz, arquivo);
        const stats = await fs.stat(caminhoCompleto);

        if(/\.git/g.test(caminhoCompleto)) continue; // não mostre o .git
        if(/node_modules/g.test(caminhoCompleto)) continue; // não mostre o node_modules
        
        if(stats.isDirectory()) {
            readdir(caminhoCompleto);
            continue
        }
        
        // if(!/\.html$/g.test(caminhoCompleto) && !/\.css$/g.test(caminhoCompleto)) continue; // mostrar apenas arquivos html e css
    
        console.log(arquivo);
    }
}

readdir(path.resolve(__dirname, '..', '..'));