import "bootstrap";
import "./style.css";

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
    "Rey",
    "Reina",
    "Jota",
    "As"
  ];
  let symbols = ["♥", "♠", "♣", "♦"];
  let cardNumber = numbers[Math.floor(Math.random() * numbers.length)];
  let cardSymbol = symbols[Math.floor(Math.random() * symbols.length)];
  console.log(cardNumber);
  let carta = document.getElementById("carta");

  let numberElement = carta.querySelector(".number");
  let topSymbol = carta.querySelector(".symbol.top-left");
  let bottomSymbol = carta.querySelector(".symbol.bottom-right");

  numberElement.innerText = cardNumber;
  topSymbol.innerText = cardSymbol;
  bottomSymbol.innerText = cardSymbol;
  carta.innerHTML = cardNumber + " " + cardSymbol;
  carta.className = "card " + cardSymbol.toLowerCase();
  carta.classList.remove("heart", "spade", "club", "diamond");
  if (cardSymbol === "♥") {
    carta.classList.add("heart");
  } else if (cardSymbol === "♠") {
    carta.classList.add("spade");
  } else if (cardSymbol === "♣") {
    carta.classList.add("club");
  } else if (cardSymbol === "♦") {
    carta.classList.add("diamond");
  }
}

window.onload = generateCard;

let generarCartaButton = document.getElementById("generarCarta");
generarCartaButton.addEventListener("click", generateCard);
