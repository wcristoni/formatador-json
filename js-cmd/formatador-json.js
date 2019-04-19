var fs = require("fs");

var NOME_ARQUIVO = 'urls.json';
var NOME_ARQUIVO_VALIDADO = 'urls-validado-'+Date.now()+'.json';

var data = JSON.parse(fs.readFileSync(NOME_ARQUIVO));
data = JSON.stringify(data, null, 2);

fs.writeFile(NOME_ARQUIVO_VALIDADO, data, 'utf8', function(err) {
    if (err)
        console.log(err);
});