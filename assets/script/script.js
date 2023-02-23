const jogadasPossiveis = ['pedra','papel','tesoura'];
let placarPlayer = 0;
let placarPC = 0 + ``;
let mensagem= "";
let acabou = 0;

function play(jogadaPlayer){
   if (acabou!=1){
    const jogadaRandom = Math.floor(Math.random()*jogadasPossiveis.length);
    const jogadaPC = jogadasPossiveis[jogadaRandom];
    let iconejogadaPC;
        //console.log("JogadaPC: "+ jogadaPC+" "+"JogadaRandom: "+ jogadaRandom);
        //console.log("JogadaPlayer: "+ jogadaPlayer);
        
        switch (`${jogadaPC}_${jogadaPlayer}`) {
            case `pedra_pedra`:
              mensagem = "EMPATE! 🤦";
              break;
            case `papel_papel`:
              mensagem = "EMPATE! 🤦";
              break;
            case `tesoura_tesoura`:
              mensagem = "EMPATE! 🤦";
              break;
            case `pedra_papel`:
              mensagem = `GANHOU! escolhi ${PCescolha()}`;
              placarPlayer++;
              break;
            case `papel_tesoura`:
              mensagem = `GANHOU! escolhi ${PCescolha()}`;
              placarPlayer++;
              break;
            case `tesoura_pedra`:
              mensagem = `GANHOU! escolhi ${PCescolha()}`;
              placarPlayer++;
              break;
            default:
              mensagem = `PERDEU!! escolhi ${PCescolha()}`;
              placarPC++;
              break;
          }vencedorPartida();
   /** if (jogadaPC===jogadaPlayer){
        mensagem = "EMPATE!"
    }else if (jogadaPC==="pedra"){
        if(jogadaPlayer==="papel"){
            mensagem =`GANHOU! escolhi ${PCescolha()}`
            placarPlayer ++;
        }
        else {
            mensagem =`PERDEU!! escolhi ${PCescolha()}`
            placarPC ++
        }
    }else if(jogadaPC==="papel"){
        if(jogadaPlayer === "tesoura"){
            mensagem =`GANHOU! escolhi ${PCescolha()}`
            placarPlayer ++;
        }else {
            mensagem =`PERDEU!! escolhi ${PCescolha()}`
            placarPC ++
        }
    }else if(jogadaPC==="tesoura"){
        if(jogadaPlayer === "pedra"){
            mensagem =`GANHOU! escolhi ${PCescolha()}`
            placarPlayer ++;
        }else {
            mensagem =`PERDEU!! escolhi ${PCescolha()}`
            placarPC ++
        }**/
   

    function vencedorPartida(){
        if(placarPC===3 ){
            mensagem =`POW! Eu ganhei!! escolhi ${PCescolha()}`
            acabou=1;
            document.querySelector('.opcao').innerText = "❌";
            document.querySelector('.opcao1').innerText = "❌";
            document.querySelector('.opcao2').innerText = "❌";
            ReiniciarPartida();  
        }else if (placarPlayer===3){
            mensagem =`Você foi o Vencedor! escolhi ${PCescolha()}`
            acabou=1;
            document.querySelector('.opcao').innerText = "❌";
            document.querySelector('.opcao1').innerText = "❌";
            document.querySelector('.opcao2').innerText = "❌";
            ReiniciarPartida();       
        }
    }
    function PCescolha(){
        if (jogadaPC === 'pedra'){
            iconejogadaPC = "✊";
            return iconejogadaPC;
        } else if (jogadaPC==='papel'){
            iconejogadaPC= "🤚";
            return iconejogadaPC;
        }else if (jogadaPC==='tesoura'){
            iconejogadaPC="✌️";
            return iconejogadaPC;
        }
    }
    
    document.querySelector('#placarPlayer').innerText = placarPlayer;
    document.querySelector('#placarPC').innerText = placarPC;
    document.querySelector('.mensagem').innerText = mensagem;
    
    
    
} 
}

function ReiniciarPartida(){
    let timerId = setTimeout(refresh,2000);
}

function refresh(){
    location.reload();
}

function desistir(){
    if(confirm("Vai arregar?")==true){
        alert("🐔🐔🐔🐔🐔!")
        refresh();
    }
}