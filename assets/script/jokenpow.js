const pedra = "pedra";
const papel = "papel";
const tesoura = "tesoura";

const opcoesValidas = [pedra, papel, tesoura];

let escolhaComputador;
let escolhaUsuario;

function jogar() {
  escolhaUsuario = prompt("Escolha pedra, papel ou tesoura:");
  
  if (!opcoesValidas.includes(escolhaUsuario)) {
    alert("Escolha inválida!");
    jogar();
    return;
  }
  
  escolhaComputador = opcoesValidas[Math.floor(Math.random() * 3)];
  
  const resultado = calcularResultado(escolhaUsuario, escolhaComputador);
  
  alert(`Você escolheu ${escolhaUsuario}. O computador escolheu ${escolhaComputador}. ${resultado}`);
}

function calcularResultado(usuario, computador) {
  if (usuario === computador) {
    return "Empate!";
  } else if (usuario === pedra) {
    if (computador === tesoura) {
      return "Você ganhou!";
    } else {
      return "Você perdeu!";
    }
  } else if (usuario === papel) {
    if (computador === pedra) {
      return "Você ganhou!";
    } else {
      return "Você perdeu!";
    }
  } else if (usuario === tesoura) {
    if (computador === papel) {
      return "Você ganhou!";
    } else {
      return "Você perdeu!";
    }
  }
}

jogar();
