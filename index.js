let nomeDoPiloto = prompt("Qual é o seu nome, piloto?");
let velocidade = 0;
alert("Olá " + nomeDoPiloto + "!" + "\nSua velocidade inicial é " + velocidade + " km/s.");

let velocidadeDoPiloto = prompt("A que velocidade você gostaria de acelerar a nave?");
let confirmaVelocidade = confirm("Iremos acelerar para " + velocidadeDoPiloto + "km/s. Você confirma?");

if(confirmaVelocidade) {
  velocidade = velocidadeDoPiloto
}

if(velocidadeDoPiloto <= 0) {
  alert("Nave está parada. Considere partir e aumentar a velocidade.")
} else if(velocidadeDoPiloto < 40) {
  alert("Você está devagar, podemos aumentar mais.")
} else if(velocidadeDoPiloto >= 40 && velocidadeDoPiloto < 80) {
  alert("Parece uma velocidade boa para manter.")
} else if(velocidadeDoPiloto >= 80 && velocidadeDoPiloto < 100) {
  alert("Velocidade alta. Considere diminuir.")
} else if(velocidadeDoPiloto >= 100) {
  alert("Velocidade perigosa. Controle automatico forçado.")
}

alert("Nome do piloto: " + nomeDoPiloto + "\nVelocidade atual: " + velocidadeDoPiloto + "km/s");