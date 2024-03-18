var ligado = true
function fun2(){ //cuida da troca de imagens
    if(ligado){
        document.getElementById("ima").src = "luzN.jfif"
        ligado = false
    }else{
        document.getElementById("ima").src = "luz.png"
        ligado = true
    }
}

function fun3(){
    let logEmail = document.getElementById("inp2").value
    let logSenha = document.getElementById("inp3").value

    if(logEmail == "Oitudobem@gmail.com"){
        if(logSenha == "1234"){
            alert("seja bem vindo monsier le mustache")
            window.location.href = "https://www.youtube.com"
        }else{
            alert("Senha incorreta")
            document.getElementById("inp3").value = null
        }
    }
}