const jogadasPossiveis = ['pedra', 'papel', 'tesoura'];
let placarPlayer = 0;
let placarPC = 0;
let mensagem = "";
let acabou = false;



function limpaConsole() {
    document.querySelector('.mensagem').value = "";
}

function refresh() {
    document.querySelector('.mensagem').value = "";
    location.reload();
}

function ReiniciarPartida() {
    document.querySelector('.mensagem').value = "";
    let timer = setTimeout(refresh, 2000);
}

function desistir() {
    if (confirm("Vai arregar?") == true) {
        alert("!!🐔🐔🐔🐔🐔!!")
        refresh();
    }
}
function icones() {
    acabou = false;
    document.querySelector('.opcao').innerText = "✊";
    document.querySelector('.opcao1').innerText = "🤚";
    document.querySelector('.opcao2').innerText = "✌️";
}

function empate() {
    acabou = true;
    document.querySelector('.opcao').innerText = "🤦";
    document.querySelector('.opcao1').innerText = "🤦";
    document.querySelector('.opcao2').innerText = "🤦";
    let timer = setTimeout(icones, 1000);
}

function play(jogadaPlayer) {
    if (acabou != true) {
        const jogadaRandom = Math.floor(Math.random() * jogadasPossiveis.length);
        const jogadaPC = jogadasPossiveis[jogadaRandom];
        let iconejogadaPC;
        let historico = [];
        console.log(historico);


        switch (`${jogadaPC}_${jogadaPlayer}`) {
            case `pedra_pedra`:
                mensagem = `EMPATE! 🤦 escolhemos ${PCescolha()}`;
                empate();
                break;
            case `papel_papel`:
                mensagem = `EMPATE! 🤦 escolhemos ${PCescolha()}`;
                empate();
                break;
            case `tesoura_tesoura`:
                mensagem = `EMPATE! 🤦 escolhemos ${PCescolha()}`;
                empate();
                break;
            case `pedra_papel`:
                mensagem = `GANHOU! escolhi ${PCescolha()}`;
                placarPlayer++;
                historico1();
                historico.push(historico1(`${jogadaPlayer}`, `${jogadaPC}`))
                // historico.push((("PC:"+jogadaPC+" - ")+("VC:"+jogadaPlayer+" - ")))
                break;
            case `papel_tesoura`:
                mensagem = `GANHOU! escolhi ${PCescolha()}`;
                placarPlayer++;
                historico1();
                historico.push(historico1(`${jogadaPlayer}`, `${jogadaPC}`))
                //  historico.push((("PC:"+jogadaPC+" - ")+("VC:"+jogadaPlayer+" - ")))
                break;
            case `tesoura_pedra`:
                mensagem = `GANHOU! escolhi ${PCescolha()}`;
                placarPlayer++;
                historico1();
                historico.push(historico1(`${jogadaPlayer}`, `${jogadaPC}`))
                //  historico.push((("PC:"+jogadaPC+" - ")+("VC:"+jogadaPlayer+" - ")))
                break;
            default:
                mensagem = `PERDEU!! escolhi ${PCescolha()}`;
                placarPC++;
                historico1();
                historico.push(historico1(`${jogadaPlayer}`, `${jogadaPC}`))
                //  historico.push((("PC:"+jogadaPC+" - ")+("VC:"+jogadaPlayer+" - ")))
                break;


        }  console.log(historico);
        vencedorPartida();
        let timerid = setTimeout(limpaConsole, 1000);







        function vencedorPartida() {
            if (placarPC === 3) {
                mensagem = `POW! Eu ganhei!! escolhi ${PCescolha()}`
                acabou = true;
                document.querySelector('.opcao').innerText = "❌";
                document.querySelector('.opcao1').innerText = "❌";
                document.querySelector('.opcao2').innerText = "❌";
                ReiniciarPartida();
            } else if (placarPlayer === 3) {
                mensagem = `Você foi o Vencedor! escolhi ${PCescolha()}`
                acabou = true;
                document.querySelector('.opcao').innerText = "🥇";
                document.querySelector('.opcao1').innerText = "🥇";
                document.querySelector('.opcao2').innerText = "🥇";
                ReiniciarPartida();
            }
        }

        function PCescolha() {
            if (jogadaPC === 'pedra') {
                iconejogadaPC = "✊";
                return iconejogadaPC;
            } else if (jogadaPC === 'papel') {
                iconejogadaPC = "🤚";
                return iconejogadaPC;
            } else if (jogadaPC === 'tesoura') {
                iconejogadaPC = "✌️";
                return iconejogadaPC;
            }
        }

        function historico1(vc, pc) {
            return {
                vc,
                pc,
            }

        }

        document.querySelector('#placarPlayer').innerText = placarPlayer;
        document.querySelector('#placarPC').innerText = placarPC;
        document.querySelector('.mensagem').value = mensagem;
    }

}





