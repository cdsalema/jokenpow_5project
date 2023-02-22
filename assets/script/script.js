const jogadasPossiveis = ['pedra','papel','tesoura'];
let placarPlayer = 0;
let placarPC = 0;

function play(jogadaPlayer){
    const jogadaRandom = Math.floor(Math.random()*3);
    const jogadaPC = jogadasPossiveis[jogadaRandom];
   console.log("JogadaPC: "+ jogadaPC+" "+"JogadaRandom: "+ jogadaRandom);
   console.log("JogadaPlayer: "+ jogadaPlayer);


    if (jogadaPC===jogadaPlayer){
        alert("EMPATE!")
    }else if (jogadaPC==="pedra"){
        if(jogadaPlayer==="papel"){
            alert("GANHOU!")
            placarPlayer ++;
        }
        else {
            alert("PERDEU!!")
            placarPC ++
        }
    }else if(jogadaPC==="papel"){
        if(jogadaPlayer === "tesoura"){
            alert("GANHOU!")
            placarPlayer ++;
        }else {
            alert("PERDEU!!")
            placarPC ++
        }
    }else if(jogadaPC==="tesoura"){
        if(jogadaPlayer === "pedra"){
            alert("GANHOU!")
            placarPlayer ++;
        }else {
            alert("PERDEU!!")
            placarPC ++
        }
    }vencedorPartida();

    function vencedorPartida(){
        if(placarPC===3 ){
               alert ("O Vencedor foi Computador!")
               ReiniciarPartida();  
        }else if (placarPlayer===3){
            alert ("Você foi o Vencedor!")
            ReiniciarPartida();       
        }
    }
    
    document.querySelector('#placarPlayer').innerText = placarPlayer;
    document.querySelector('#placarPC').innerText = placarPC;
}

function ReiniciarPartida(){
    placarPC=0;
    placarPlayer=0;
}

function refresh(){
    if(confirm("Vai arregar?")==true){
        alert("frangote(a)!")
    location.reload();
    }
}