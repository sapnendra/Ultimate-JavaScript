// let arr = [10,20,30,40,50];
// console.log(arr);

// array map method which is able to return a modified array
// let nums = arr.map((value, index, array)=>{
//     console.log(value, index, array);
//     value *= 10;
//     return value;
// })
// console.log(nums);


// array filter which is able to return a filtered array
// let numbers = [10,20,30,40,50];
// let filterNumber = numbers.filter((value)=>{
//     return value>0;
// })
// console.log(filterNumber);

// array reduce function which is able to return a single value by performing operation on each element of the array
let natNum = [10,20,30,40,50];
let newNatNum = natNum.reduce((a,b)=>{
    return a+b;
})
console.log(newNatNum);