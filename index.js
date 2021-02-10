function logar() {

    var txtLogin = document.getElementById("txtLogin").value;
    var txtSenha = document.getElementById("txtSenha").value;

    console.log("Digitou = " + txtLogin + "/" + txtSenha);

    //uma vez capturadas as informações, preciso montar uma mensagem para enviar ao Backend

    var msgBody = {

        racf: txtLogin,
        email: txtLogin,
        senha: txtSenha

    };

    var cabecalho = {
        method: "POST",
        body: JSON.stringify(msgBody),
        headers: {
            "Content-type": "application/json"
        }
    };

    fetch("http://localhost:8088/login", cabecalho).then(resposta => trataResposta(resposta));

}

function trataResposta(resposta) {
    if (resposta.status == 200) {

        resposta.json().then(usuario => console.log(usuario));

    } else if (resposta.status == 401) {
        document.getElementById("msg").innerHTML = "Senha Inválida";
    }
    else if (resposta.status == 404) {
        document.getElementById("msg").innerHTML = "Usuário Não Encontrado";
    } else {
        document.getElementById("msg").innerHTML = "Erro desconhecido";
    }

}