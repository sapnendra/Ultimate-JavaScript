const prompt = require("prompt-sync")();

let age = prompt("Enter your age: ");
age = Number.parseInt(age);
if(age > 18) {
    alert("You can drive a car");
} else {
    alert("You aren't able to drive car");
}