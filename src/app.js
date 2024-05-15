import "bootstrap";
import "./style.css";
document.addEventListener("DOMContentLoaded", function() {
  generateCard();
});

function generateCard() {
  let numbers = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "K",
    "Q",
    "J",
    "A"
  ];
  let symbols = ["♥", "♠", "♣", "♦"];
  let cardNumber = numbers[Math.floor(Math.random() * numbers.length)];
  let cardSymbol = symbols[Math.floor(Math.random() * symbols.length)];

  let carta = document.getElementById("carta");

  let numberElement = carta.querySelector(".number");
  let topSymbol = carta.querySelector(".symbol.top-left");
  let bottomSymbol = carta.querySelector(".symbol.bottom-right");

  numberElement.innerText = cardNumber;
  topSymbol.innerText = cardSymbol;
  bottomSymbol.innerText = cardSymbol;
  if (cardSymbol === "♥" || cardSymbol === "♦") {
    topSymbol.style.color = "red";
    bottomSymbol.style.color = "red";
  } else {
    topSymbol.style.color = "black";
    bottomSymbol.style.color = "black";
  }
}
window.onload = function() {
  let generarCartaButton = document.getElementById("generarCarta");
  generarCartaButton.addEventListener("click", generateCard);
};
function generateNewCard() {
  generateCard();
}
setInterval(generateNewCard, 5000);
