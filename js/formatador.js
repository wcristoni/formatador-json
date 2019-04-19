function ValidarJson(){

    var dados = document.getElementById('txtConteudo').value;
    try {
        document.getElementById("divMensagem").innerHTML = JSON.stringify(JSON.parse(dados), null, 2);
    }catch (e) {
        console.log(e);
        document.getElementById("divMensagem").innerHTML = e.message + '\n\n' + e.stack;
    }
}

