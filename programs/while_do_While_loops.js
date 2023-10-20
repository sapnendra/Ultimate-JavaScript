const prompt = require("prompt-sync")();

// while loop
let n = prompt("Enter a integer: ");
let i = 0;
while(i<n) {
    console.log(i++);
}

// do while loop
let num = prompt("Enter a number: ");
let j = 10;
do {
    console.log(j++);
} while(i<n);