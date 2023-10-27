const prompt = require("prompt-sync")();

alert = ("Enter the value of a!");
let num = prompt("Enter a here!");
num = Number.parseInt(num);
alert("You entered a" + (typeof num));
document.write(num);