const prompt = require("prompt-sync")();

let age = prompt("Enter an integer: ");
age = parseInt(age);

let check = age > 18 ? "You can drive" : "You can't drive";
console.log(check);