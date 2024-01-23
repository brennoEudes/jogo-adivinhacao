// VARIÁVEIS:
const screen1 = document.querySelector(".screen-1");
const screen2 = document.querySelector(".screen-2");

const btnTry = document.querySelector("#btn-try");
const btnReset = document.querySelector("#btn-reset");

let randomNumber = Math.round(Math.random() * 10); // lógica utilizando método JS p/ gerar nº aleatórios entre 0 e 10 e guardar em memória.
let xAttempts = 1; // começa em 1, pois se o user acertar na 1º, não ficará o zero!

// EVENTOS
btnTry.addEventListener("click", handleTryClick); // No caso, a fcn handleTryClick só será executada após o click!
btnReset.addEventListener("click", handleResetClick); 

// Seleciona e add funcionalidade ao btn enter:
document.addEventListener("keydown", function (e) {
  if (e.key == "Enter" && screen1.classList.contains("hide")) {
    handleResetClick();
  }
});

// FUNÇÕES:
// Função callback: fcn que é passada como parâmetro em uma outra fcn, em que algum momento será executada.
function handleTryClick(event) {
  /* O nome da variável "event" pode ser qq nome! */
  event.preventDefault(); // Significa "não faça o comportamento", que neste caso, é ao clicar no btn enviar o form.

  const inputNumber = document.querySelector("#input-number"); // selecionando o elemento pelo seletor css (id)

  if (Number(inputNumber.value) == randomNumber) {
    /* NÃO esquecer do "value"! */

    // 1º forma:
    // screen1.classList.add("hide"); // add classe hide à screen-1
    // screen2.classList.remove("hide"); // remove classe hide de screen-2

    // 2º forma (mais simples):
    toggleScreen();

    screen2.querySelector(
      "h2"
    ).innerText = `Parabéns! Você acertou em ${xAttempts} tentativas.`;
  } else {
    console.log("Errou! Tente novamente.");
  }

  inputNumber.value = ""; // caso não haja acerto, reseta o campo input!
  xAttempts++; // adiciona 1 após cada tentativa
  //console.log(xAttempts);
  //console.log(inputNumber.value); // acessando o valor do input c/ "value".
}

function handleResetClick() {
  // 1º forma:
  //   screen1.classList.remove("hide"); // remove classe hide à screen-1
  //   screen2.classList.add("hide"); // add classe hide de screen-2
  // 2º forma (mais simples):
  toggleScreen();

  xAttempts = 1; // reseta o nº de tentativas!

  randomNumber = Math.round(Math.random() * 10); // cria um novo nº após o reset!
}

function toggleScreen() {
  screen1.classList.toggle("hide"); // altera a class "hide" do momento (remove ou add)
  screen2.classList.toggle("hide"); // altera a class "hide" do momento (remove ou add)
}
