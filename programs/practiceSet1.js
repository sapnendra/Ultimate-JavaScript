// Question1
let str = "Sappu";
let b = 3422;
// concatnation
// console.log(str + b);

// Question2
let type = typeof((str+b));
// it will print the type after concate number and string
// console.log(type);


// Question3 
const obj = {
    name: "Sapnendra",
    rollNo: 191,
    age: 20,
    isPrinciple: false,
    from: "Delhi"
}
// a = "Sappu"; // it will throw an error because it is a constant constent object

console.log("Before updating the object details: ");
console.log(obj);

obj['rollNo'] = 100;
obj['name'] = "Sapnendra Jaiswal";
// Question4
obj['from'] = "Madwas";  // addtion a new key details into object
obj['isPrinciple'] = true;

console.log("After updating the object details: ");
console.log(obj);


// Question5

const dictionary = {
    Appreciate: "Recognize the full worth of.",
    Ataraxia: "A state of freedom from emotional disturbance and anxiety.",
    yakka: "Work, Especially hard work.",
}

console.log(dictionary.yakka);
console.log(dictionary['yakka']);
console.log(dictionary.Appreciate);
console.log(dictionary['Appreciate']);
console.log(dictionary.Ataraxia);
console.log(dictionary['Ataraxia']);