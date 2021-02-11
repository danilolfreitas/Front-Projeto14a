function carregaInfo(){
    var strUser = localStorage.getItem("userDASH");

    if (!strUser){
        window.location = "index.html";
        return;
    }

var user = JSON.parse(strUser);


document.getElementById("fotoUser").innerHTML = `<img src="${user.linkFoto}" width="80%" align="center">`;
document.getElementById("bioUser").innerHTML = `<h4>${user.nome}</h4>
                                                <p><strong>Racf:</strong> ${user.racf}
                                                <p><strong>Email:</strong> ${user.email} 
                                                <p><strong>ramal:</strong> ${user.ramal}  
                                                <p><button type="button" class="btn btn-primary"
                                                onClick="logout()">Logout</button>`;
}                                    

function logout(){

    localStorage.removeItem("userDASH");
    window.location = "index.html";
    return;

}