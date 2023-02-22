const jogadasPossiveis = ['pedra','papel','tesoura'];
let placarPlayer = 0;
let placarPC = 0;

function GamePlay(jogadaPlayer) {
  const jogadaRandom = Math.floor(Math.random() * 3);
  const jogadaPC = jogadasPossiveis[jogadaRandom];
  console.log("JogadaPC: "+ jogadaPC);

  // Check if it is a tie
  if (jogadaPC === jogadaPlayer){
    alert('EMPATE!');
  } else {
    // Set the winner and the loser sides
    const ladoVencedor = 'pedra' === jogadaPC ? jogadaPlayer : jogadaPC;
    const ladoPerdedor = jogadaPC === ladoVencedor ? jogadaPlayer : jogadaPC;
    
    // Check quem venceu disputa
    if (ladoVencedor === jogadaPlayer) {
      alert('GANHOU!');
      placarPlayer ++;
    } else {
      alert('PERDEU!!');
      placarPC ++;
    }
  }

  // Check placar e quem ganhou
  if (placarPC === 3 ){
    alert ('O Vencedor foi Computador!');
    ReiniciarPartida();  
  } else if (placarPlayer === 3) {
    alert ('Você foi o Vencedor!');
    ReiniciarPartida();       
  }

  document.querySelector('#placarPlayer').innerText = placarPlayer;
  document.querySelector('#placarPC').innerText = placarPC;
}

// Reset game score
function ReiniciarPartida(){
  placarPC=0;
  placarPlayer=0;
}
