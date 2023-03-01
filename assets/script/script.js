const jogadasPossiveis = ['pedra','papel','tesoura'];
let placarPlayer = 0;
let placarPC = 0 ;
let mensagem= "";
let acabou = false;

function refresh(){
    document.querySelector('.mensagem').value = "";
    location.reload();
}

function ReiniciarPartida(){
    document.querySelector('.mensagem').value = "";
    let timer = setTimeout(refresh,1500);
}

function desistir(){
    if(confirm("Vai arregar?")==true){
        alert("!!🐔🐔🐔🐔🐔!!")
        refresh();
    }
}
function icones(){
    document.querySelector('.opcao').innerText = "✊";
    document.querySelector('.opcao1').innerText = "🤚";
    document.querySelector('.opcao2').innerText = "✌️";
}

function empate(){
    document.querySelector('.opcao').innerText = "🤦";
    document.querySelector('.opcao1').innerText = "🤦";
    document.querySelector('.opcao2').innerText = "🤦";
    let timer=setTimeout(icones,700);
}

function play(jogadaPlayer){
   if (acabou!=true){
        const jogadaRandom = Math.floor(Math.random()*jogadasPossiveis.length);
        const jogadaPC = jogadasPossiveis[jogadaRandom];
        let iconejogadaPC;
        //let historico =[];
                          
            switch (`${jogadaPC}_${jogadaPlayer}`) {
                case `pedra_pedra`:
                mensagem = "EMPATE! 🤦";
                empate();
                break;
                case `papel_papel`:
                mensagem = "EMPATE! 🤦";
                empate();
                break;
                case `tesoura_tesoura`:
                mensagem = "EMPATE! 🤦";
                empate();
                break;
                case `pedra_papel`:
                mensagem = `GANHOU! escolhi ${PCescolha()}`;
                placarPlayer++;
                // historico.push((("PC:"+jogadaPC+" - ")+("VC:"+jogadaPlayer+" - ")))
                break;
                case `papel_tesoura`:
                mensagem = `GANHOU! escolhi ${PCescolha()}`;
                placarPlayer++;
                //  historico.push((("PC:"+jogadaPC+" - ")+("VC:"+jogadaPlayer+" - ")))
                break;
                case `tesoura_pedra`:
                mensagem = `GANHOU! escolhi ${PCescolha()}`;
                placarPlayer++;
                //  historico.push((("PC:"+jogadaPC+" - ")+("VC:"+jogadaPlayer+" - ")))
                break;
                default:
                mensagem = `PERDEU!! escolhi ${PCescolha()}`;
                placarPC++;
                //  historico.push((("PC:"+jogadaPC+" - ")+("VC:"+jogadaPlayer+" - ")))
                break;
                
           
            }   vencedorPartida();
           // console.log(historico);
                
   
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





