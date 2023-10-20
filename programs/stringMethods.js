const prompt = require("prompt-sync")();


// let name = "Hello! - Sapnendra Jaiswal.";
// console.log(name.length);
// console.log(name);
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// console.log(name.slice(2)); // single argument slice method
// console.log(name.slice(9, name.length-1)); // two arguments slice method

// let Name = "Sang-ReplaceMent Jaiswal";
// console.log(Name.replace("-ReplaceMent", "am"));

// let firstName = "Saurabh";
// let lastName = "Sangam";
// let fullName = firstName.concat(lastName);
// console.log(fullName);

// let friend = "Rohan";
// console.log(friend.concat(" is a friend of ", firstName, " Ok!"));

// let friend2 = "     Prabhu...!       ";
// // console.log(friend2);
// console.log(friend2.trim());

let str = "Sapnendra";
str[2] = "M";  // This is not possible
let size = str.length;
for(let i=0; i<size; i++) {
    process.stdout.write(str[i]);
}console.log();