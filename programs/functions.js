const prompt = require("prompt-sync")();

function onePlusAvg(x, y) {
    // Math.round
    return (1+(x+y)/2);
}

// unique way of doing it
const sum = (p, q)=> {
    return p+q;
}

let a = 1;
let b = 2;
let c = 3;

console.log("Avg of a and b: ", onePlusAvg(a, b));
console.log("Avg of b and c: ", onePlusAvg(b, c));
console.log("Avg of a and c: ", onePlusAvg(a, c));
console.log("Sum of a and b: ", sum(a, b));


// Aero function
const hello = ()=>{
    console.log("Hello! How are you? : I'm good.");
    return "It will return anything, it will print where hello function will inwoke";
}
hello();