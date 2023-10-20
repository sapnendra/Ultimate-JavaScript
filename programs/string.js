const prompt = require("prompt-sync")();

// strings are immutable
let name = "Hello!";
// console.log(name.length);
// console.log(name[0], name[1], name[2], name[3], name[4], name[5]);
console.log(name);
let address = "I am from Bhopal.";
// console.log(address.length);
console.log(address);
let work = 'I will be a software engineer.';
// console.log(work.length);
process.stdout.write(work);
console.log();


// template literals
let boy1 = "Pramod";
let boy2 = "Nikhil";
// Nikhil is a friend of pramod
let sentance = `${boy2} is "A friend" of ${boy1}.`;
console.log(sentance);

// Escape sequence characters
let fruit = "Apple";
// \n - new line
// \t - tab
// \r - carriage return
console.log(fruit);