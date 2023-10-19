const prompt = require("prompt-sync")();

// Program to add first n natural numbers.
let n = prompt("Enter the number of natural numbers you want to add: ");
n = Number.parseInt(n);
let sum = 0;
// simple for loop over 1 to n, and add to sum
for(let i=0; i<=10; i++) {
    sum = sum + i;
}
console.log("Your Sum is: ", sum);


/*
const item = {
    "Sapnendra-":"Sidhi",
    "Rohan-" : "Madwas",
    "Saurabh-" : "Amahiya",
    "Shubh-" : "Katra",
    "Harry-" : "Chandigarh",
    "Sangam-" : "Amahiya"
}
// for in loop over item object and print key and value
for(const key in item) {
    console.log(key, item[key]);
}

const alpha = {
    "a:" : 1,
    "b:" : 2,
    "c:" : 3,
    "d:" : 4,
    "e:" : 5,
    "f:" : 6,
    "g:" : 7,
    "h:" : 8,
    "i:" : 9,
    "j:" : 10,
    "k:" : 11,
    "l:" : 12,
    "m:" : 13,
    "n:" : 14,
    "o:" : 15,
    "p:" : 16,
    "q:" : 17,
    "r:" : 18,
    "s:" : 19,
    "t:" : 20,
    "u:" : 21,
    "v:" : 22,
    "w:" : 23,
    "x:" : 24,
    "y:" : 25,
    "z:" : 26
}

// for in loop over alpha object and print key and value
for(const key in alpha) {
    console.log(key, alpha[key]);
    // console.log("\n");
}

const marks = {
    "Sapnendra" : 89,
    "Rohan" : 90,
    "Saurabh" : 91,
    "Shubh" : 92,
    "Harry" : 93,
    "Sangam" : 94
}

// for in loop over marks object, print key and value
for(const key in marks) {
    console.log(key, marks[key]);
}

// for of loop iterate over string
for(const key of "SAPNENDRA") {
    console.log(key);
}

*/