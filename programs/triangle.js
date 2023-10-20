const prompt = require("prompt-sync")();

let n = prompt("Enter an integer value: ");

for(let i=0; i<n; i++) {
    // spaces
    for(let j=0; j<n-i; j++) {
        process.stdout.write(" ");
    }
    // stars
    for(let j=0; j<i+1; j++) {
        process.stdout.write("*");
    }
    console.log();
}