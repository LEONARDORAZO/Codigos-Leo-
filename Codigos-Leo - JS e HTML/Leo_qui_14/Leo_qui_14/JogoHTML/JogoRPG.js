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


//---------------------------páginas---------------------------
function Inicio(){
    document.getElementById("body").innerHTML = resetadora //reset padrão detroca de página
    document.getElementById("hp").innerHTML = "Vida: " + vida
    document.getElementById("divi1").innerHTML += `
    <h1 class="h11">O começo da jornada</h1><br><br>
    <p>um macho olha pra tu e fala que tu é franguin, o que tu faz?</p>
    <input type="button" value="bater nele" onclick="arenaCombate(5,5,5,1)"> <br><br>
    <input type="button" value="sair correndo" onclick="teste2()">
    `
}

function teste3(){
    document.getElementById("body").innerHTML = resetadora //reset padrão de troca de página
    document.getElementById("hp").innerHTML = "Vida: " + vida
    document.getElementById("divi1").innerHTML += `<h1 class="h11">O "Macho" era broxa</h1>
    <p>Depois de Descer a Porrada no cara, o homi se ajoelha e pede perdão por existir. logo em seguida ele se Mata, se jogando do penhasco a frente. Pronto, agora voce esta livre para continuar sua Jornada :3</p>
    <br>
    <p>Depois de presenciar o aguardado suicidio do "Macho", voce caminha até uma aldeia proxima. Lá voce ouve relatos indicando que um cara chamado "Manoel Rei da P90" é o lider da cidade. oq tu faz diante disso?? </p>
    <button>Tacar o FODASE e pedir pro Osama Bin Laden meter um aviao no meio da cidade</button><br><br><button>Invocar o Gabriel Calça angelical para uma batalha MORTAL de FreeFaire</button>`
}

function teste4(){

}

function teste2(){ //página 01
    //reset padrão detroca de página
    document.getElementById("body").innerHTML = resetadora 
    document.getElementById("hp").innerHTML = "Vida: " + vida
    //função em si
    TestaPericia(6)
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
