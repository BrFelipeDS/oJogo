let dificuldade;
let nome;
let chute;
let answer;
let tentativas;
let victory = 0;

const startButton = document.querySelector("#comecar");
const guessButton = document.querySelector("#chutar");

startButton.addEventListener("click", mudarNome); 

function mudarNome(){

    nome = document.getElementById("usuario");
    document.querySelector("#nome-usuario").innerHTML = "Olá, " + nome.value + "!";
    dificuldade = parseInt(document.querySelector("#dificuldade").value);
    document.querySelector("#dica").innerHTML = "Para equilibrar o jogo, lhe direi se a resposta é menor ou maior que o seu chute...";
    document.querySelector("#guess").value = "";

    victory = 0
    
    if(dificuldade != 3){
        tentativas = 3
        document.querySelector("#tentativas").innerHTML = "Você tem " + tentativas + " tentativas";
    }
    
    if(dificuldade===0){
        answer=Math.floor((Math.random() * 10) + 1);
    }

    if(dificuldade===1){
        answer=Math.floor((Math.random() * 100) + 1);
    }

    if(dificuldade===2){
        answer=Math.floor((Math.random() * 200) + 1);
    }

    if(dificuldade===3){
        answer=Math.floor((Math.random() * 1000) + 1);
        tentativas = 8;
        document.querySelector("#tentativas").innerHTML = "Você tem " + tentativas + " tentativas";
    }


}

guessButton.addEventListener("click", chutar);


function chutar(){

    chute = parseInt(document.querySelector("#guess").value);


    if(tentativas > 0 && victory != 1){
        
        if(chute === answer){
            document.querySelector("#dica").innerHTML = "Você acertou!";
            victory = 1;
            document.querySelector("#tentativas").innerHTML = "Não terá tanta sorte da próxima vez...";
            document.querySelector(".victory").play();
            setTimeout(function(){document.querySelector(".victory2").play()}, 4000);
        }
        else if(chute < answer){
            document.getElementById("dica").innerHTML = "A resposta é maior...";
            tentativas--;             
        }
        else{
            document.getElementById("dica").innerHTML = "A resposta é menor...";
            tentativas--;
        }
        
        if(tentativas != 0 && victory != 1){
            document.querySelector("#tentativas").innerHTML = "Você tem " + tentativas + " tentativas";
        }
         
    }
    if(tentativas ===0){
        document.querySelector("#dica").innerHTML = "Você perdeu!";
        document.querySelector("#tentativas").innerHTML = "A resposta era " + answer + "!";
        Jumpscare();
    }
}

function Jumpscare(){
        document.querySelector(".scream").play();
        setTimeout(function(){document.querySelector(".thunder").play()}, 200);
        setTimeout(function(){document.querySelector(".jumpscare").style.display = "block"}, 300);
        setTimeout(function(){document.querySelector(".jumpscare").style.display = "none"}, 6000);
}