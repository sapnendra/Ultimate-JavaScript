const prompt = require("prompt-sync")();

let marks = {
    Harry : 98,
    Rohan : 70,
    Aakash : 7
}

// using for loop
// question 1
for(let i=0; i<Object.keys(marks).length; i++) {
    // console.log("The marks of " + Object.keys(marks)[i] + " is: " + marks[Object.keys(marks)[i]]);
}

// using for in loop
// question 2
for(let key in marks) {
    // console.log(key);
    // console.log("The marks of " + key + " is: " + marks[key]);
}

// question 3
let correctNum = -1;
let i;
while(i!=correctNum) {
    console.log("try again!")
    i = prompt("Enter the correct number: ");
}
console.log("You got the correct number... boom!");

// question 4
const findMean = (a, b, c, d)=>{
    return (a+b+c+d)/4;
}

let ans = findMean(1, 2, 3, 4);
console.log("Your ans is: ", ans);