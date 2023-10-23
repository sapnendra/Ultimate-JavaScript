// let arr = [1, 2, 3, 4, 5];
// delete arr[1];
// console.log(arr);
// console.log("Length of the array: ", arr.length);
// delete arr[0];
// console.log(arr);
// console.log("Length of the array: ", arr.length);

// concat method
// let moreArr = [6, 7, 8];
// let newArr = arr.concat(moreArr);
// console.log(newArr);

// sort method - it will sort the array alphabetically
// let num1 = [2, 45, 232, 6, 32, 56, 87];
// console.log("Before sorting alphabetically: ", num);
// num.sort();
// console.log("After sorting alphabetically: ", num);

// sort method ascending order
// let compare = (a,b) => {
//     return a-b;
// }
// let num2 = [2, 45, 232, 6, 32, 56, 87];
// console.log("Before sorting ascending: ", num);
// num.sort(compare);
// console.log("After sorting ascending: ", num);


// sort method descending order
// let compare = (a,b) => {
//     return b-a;
// }
// let num = [2, 45, 232, 6, 32, 56, 87];
// console.log("Before sorting descending: ", num);
// num.sort(compare);
// console.log("After sorting descending: ", num);

// reverse method - it will reverse the array
// let num4 = [2, 45, 232, 6, 32, 56, 87];
// num4.reverse();
// console.log(num4);


// splice method - 
// let num5 = [12,23,34,45,56,67];
// let deletedValues = num5.splice(2, 3, 100, 200, 300);
// // console.log(num5);
// console.log(deletedValues);

// slice method - it will slice out a piece of an array
let num6 = [1,2,3,4,5,6];
console.log(num6);
let slicedValues = num6.slice(2); // start from 2nd index till last index
console.log(slicedValues);
let slicedValues2 = num6.slice(2, 5); // start from 2nd index till 5th index
console.log(slicedValues2);