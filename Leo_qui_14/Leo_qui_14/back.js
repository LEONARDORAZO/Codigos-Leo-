var passouTeste = false
var dadoRolado = 0
var vida = 100
var vidaInimigo = 0
var danoInimigo = 0
var inimigoMorto = false
//guarda as informações iniciais do jogo
var resetadora = `<body id="body">
    
<div class="mainBD" id="divi1">
    <p id="hp">Vida: 100</p>
</div>

</body>` 

function fun1(valto)//cuida da troca de cor
{
    let ranDom = Math.floor(Math.random() * valto + 1)
    dadoRolado = ranDom
    alert(ranDom)
}

var ligado = true
function fun2(){ //cuida da troca de imagens
    if(ligado){
        document.getElementById("ima").src = "imagem/luzN.jfif"
        ligado = false
    }else{
        document.getElementById("ima").src = "imagem/luz.png"
        ligado = true
    }
}

function fun3(){
    let logEmail = document.getElementById("inp2").value
    let logSenha = document.getElementById("inp3").value

    if(logEmail == "axels.duran@gmail.com"){
        if(logSenha == "1234"){
            alert("seja bem vindo monsier le mustache")
            window.location.href = "https://www.youtube.com"
        }else{
            alert("Senha incorreta")
            document.getElementById("inp3").value = null
        }
    }
}

//---------------------------páginas---------------------------
function Inicio(){
    document.getElementById("body").innerHTML = resetadora //reset padrão detroca de página
    document.getElementById("hp").innerHTML = "Vida: " + vida
    document.getElementById("divi1").innerHTML += `
    <h1 class="h11">O começo da jornada</h1><br><br>
    <p>um macho olha pra tu e ve que tu é fraquin o que tu faz?</p>
    <input type="button" value="bater nele" onclick="arenaCombate(3,6,5,1)"> <br><br>
    <input type="button" value="sair correndo" onclick="teste2()">
    `
}

function teste3(){
    document.getElementById("body").innerHTML = resetadora //reset padrão detroca de página
    document.getElementById("hp").innerHTML = "Vida: " + vida
    document.getElementById("divi1").innerHTML += `<h1 class="h11">O "Macho" era broxa</h1>
    <p>Depois de Descer a Porrada no cara, o homi se ajoelha e pede perdão por existir. logo em seguida ele se Mata, se jogando do penhasco a frente. Pronto, agora voce esta livre para continuar sua Jornada :3</p>
    <br><br>
    <p>Depois de presenciar o suicidio</p>`
}

function teste4(){

}

function teste2(){ //página 01
    //reset padrão detroca de página
    document.getElementById("body").innerHTML = resetadora 
    document.getElementById("hp").innerHTML = "Vida: " + vida
    //função em si
    TestaPericia(5)
    if(passouTeste==true){
        document.getElementById("divi1").innerHTML += `
        <p>tu correu</p>`
    }else{
        tomaDano(10)
        Inicio()
    }
    
}

function arenaCombate(vidaTo, dificultas, danoTo, checkPoint){//página da arena de combate 
    //reset padrão detroca de página
    document.getElementById("body").innerHTML = resetadora 
    document.getElementById("hp").innerHTML = "Vida: " + vida
    //função em si
    vidaInimigo = vidaTo
    danoInimigo = danoTo
    document.getElementById("divi1").innerHTML += `<p id="vidaIni">Vida do inimigo: ${vidaInimigo}</p>
    <input type="button" value="Dar um soco" onclick="AtacaInimigo(${dificultas}, ${checkPoint})">`

}


//---------------------------engrenagens---------------------------
function tomaDano(valto){
    vida-=valto
    document.getElementById("hp").innerHTML = "Vida: " + vida
    if(vida <= 0){ //ciclo de resetar pos morte
        document.getElementById("body").innerHTML = resetadora 
        document.getElementById("divi1").innerHTML += `<button onclick="Inicio()">começar a aventura</button>`
        vida = 100
    }
}
function RolaDado(valto){
    dadoRolado = Math.floor(Math.random() * valto + 1)
    alert(dadoRolado)
}
function TestaPericia(dificuldade){
    RolaDado(20)
    let rolagem = dadoRolado
    if(rolagem >= dificuldade){
        passouTeste = true
    }else{
        passouTeste = false
    }
}

function AtacaInimigo(valto, checkPoint){
    TestaPericia(valto)
    if(passouTeste){
        if (vidaInimigo <= 1 ){
            switch(checkPoint){
                case 1:
                    teste3()
                case 2:
                    teste4()
            }
        }else{vidaInimigo -= 1
            document.getElementById("vidaIni").innerHTML = "Vida do inimigo: " + vidaInimigo
        }
    }else{
        vidaInimigo -= 1
        tomaDano(danoInimigo)
    }
}
