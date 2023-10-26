const prompt = require("prompt-sync")();

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let number = getRandomInt(100);
let chances = 0;
let num;
while (num != number) {
  num = prompt("Guess the number: ");
  num = Number.parseInt(num);
  chances++;
}

console.log(
  "Congratulations! You guessed it in",
  chances,
  "chances!",
  "and the number is: ",
  number
);
