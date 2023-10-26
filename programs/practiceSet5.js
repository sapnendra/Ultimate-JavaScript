const prompt = require("prompt-sync")();

// question 1
// let arr = [10,20,30,40,50];
// for(let i=0; i<5; i++) {
//     let num = prompt("Enter a number: ");
//     num = Number.parseInt(num);
//     arr.push(num);
// }
// console.log(arr);

// question 2
// let arr = [1,2,3,4,5];
// let num;
// do{
//     num = prompt("Enter a number: ");
//     num = Number.parseInt(num);
//     arr.push(num);
// } while(num!=0);
// console.log(arr);

// question 3
// let arr = [20, 23, 34, 40, 50];
// let num = arr.filter((value)=>{
//     return value%10 == 0;
// })
// console.log(num);

// question 4
// let arr = [2,3,4,5,6];
// let square = arr.map((value)=>{
//     return value*value;
// })

// console.log(square);

// question 5
let arr = [1,2,3,4,5,6];
let fact = arr.reduce((a, b)=>{
    return a*b;
})
console.log("Factorial of", arr[arr.length-1], " is ", fact);