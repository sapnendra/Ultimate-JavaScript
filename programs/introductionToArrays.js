const prompt = require("prompt-sync")();

let arr = [1,2,3,4,5,"Not Present"];
console.log(arr);
console.log(arr[6])  // will be undefined, because index 6 is not present
console.log("Length of the array: ", arr.length);

// adding a new value to the array
arr[6] = "New Value";
console.log(arr);
console.log("Length of the array: ", arr.length);

// changing the value of an array
arr[5] = "Changed";
console.log(arr);
console.log("Length of the array: ", arr.length);

// type of array is = object
console.log(typeof arr);

// using for loop
for(let i=0; i<arr.length; i++) {
    console.log(arr[i]);
}