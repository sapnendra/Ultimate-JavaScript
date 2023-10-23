let num = [1,2,3,4,5];
// console.log("Objects or integers: ", num);
// console.log("Type of num before conversion: ", typeof num);
// let numStr = num.toString(); // convert array to string
// console.log("String version: ", numStr);
// console.log("Type of num after conversion: ", typeof num);
// console.log("Type of numStr: ", typeof numStr);

// join method
// let join = num.join("-");
// console.log(join, typeof join);  // output = 1-2-3-3-4-5 string

// pop method
// let pop = num.pop();
// console.log(pop, typeof pop); // output = 5 string

// push method
// let r = num.push(100);  // push method returns the length of the array
// console.log(num, r); // output = 1,2,3,3,4,5,100   6(length)

// shift method - it will return the front element of the array
let front = num.shift();
console.log(front, num); // output = 1 [2,3,3,4,5]