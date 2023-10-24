let num = [10, 20, 30, 40, 50];

// for each loop for array traversing
num.forEach((element) => {
  console.log(element);
});

// for of loop in array
console.log("item:");
for (let item of num) {
  console.log(item);
}

// for in loop in array
console.log("index:");
for (let i in num) {
  console.log(i);
}

// Array.from
let name = "Sapnnedra";
let arr = Array.from(name);  // arr is an object
console.log(typeof arr, arr);  // output = object, ["S", "a", "p", "n", "n", "e", "d", "r", "a"]