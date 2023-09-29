/**
 * __dirname === nome da pasta atual | caminho absoluto
 * 
 * __filename === nome do arquivo atual
 * 
 * também da para mexer com pastas usando esse dirname ou filename
 */

const path = require('path');

const exp = require(path.resolve(__dirname, '..', 'import export', 'export'));

console.log(path);