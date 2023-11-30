var clicou = false

function fun1()
{
    if(clicou == true){
        document.getElementById("p1").style.backgroundColor = "red"
        clicou = false
    }else{
        document.getElementById("p1").style.backgroundColor = "white"
        clicou = true
    }
}

function trocaImgem(){
    if(clicou){
        document.getElementById("im1").src = "imagens/capivara.jpg"
        clicou = false
    }else{
        document.getElementById("im1").src = "imagens/capivari.jpg"
        clicou = true
    }
}

function fun2(){
    let email = document.getElementById("mail").value
    let senga = document.getElementById("senha").value

    if(email == "apa@gmail.com"){
        if(senga == "123"){
            alert("seja bem vindo hakerman123")
        }else{
            alert("sai fora v****")
        }
    }
}

function fun3(){
    
}