const jogadasPossiveis = ['pedra','papel','tesoura'];
let placarPlayer = 0;
let placarPC = 0 ;
let mensagem= "";
let acabou = false;
<<<<<<< HEAD

=======
>>>>>>> 6dde6e0d07c62799825792b8128657e3814d3a49

function refresh(){
    document.querySelector('.mensagem').value = "";
    location.reload();
}

function ReiniciarPartida(){
<<<<<<< HEAD
    document.querySelector('.mensagem').value = "";
=======
>>>>>>> 6dde6e0d07c62799825792b8128657e3814d3a49
    let timerId = setTimeout(refresh,2000);
}

function desistir(){
    if(confirm("Vai arregar?")==true){
        alert("🐔🐔🐔🐔🐔!")
        refresh();
    }
}

function play(jogadaPlayer){
   if (acabou!=true){
        const jogadaRandom = Math.floor(Math.random()*jogadasPossiveis.length);
        const jogadaPC = jogadasPossiveis[jogadaRandom];
        let iconejogadaPC;
        let historico =[];
        
              
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
                historico.push(jogadaPlayer+jogadaPC);
                break;
                case `papel_tesoura`:
                mensagem = `GANHOU! escolhi ${PCescolha()}`;
                placarPlayer++;
                historico.push(jogadaPlayer+jogadaPC);
                break;
                case `tesoura_pedra`:
                mensagem = `GANHOU! escolhi ${PCescolha()}`;
                placarPlayer++;
                historico.push(jogadaPlayer+jogadaPC);
                break;
                default:
                mensagem = `PERDEU!! escolhi ${PCescolha()}`;
                placarPC++;
                historico.push(jogadaPlayer+jogadaPC);
                break;
                
                           
            }  console.log(historico) 
                vencedorPartida();
   
            function vencedorPartida(){
                if(placarPC===3 ){
                    mensagem =`POW! Eu ganhei!! escolhi ${PCescolha()}`
                    acabou=true;
                    document.querySelector('.opcao').innerText = "❌";
                    document.querySelector('.opcao1').innerText = "❌";
                    document.querySelector('.opcao2').innerText = "❌";
                    ReiniciarPartida();  
                }else if (placarPlayer===3){
                    mensagem =`Você foi o Vencedor! escolhi ${PCescolha()}`
                    acabou=true;
                    document.querySelector('.opcao').innerText ="🥇";
                    document.querySelector('.opcao1').innerText ="🥇";
                    document.querySelector('.opcao2').innerText ="🥇";
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
            document.querySelector('.mensagem').value = mensagem;
    } 
            
}





