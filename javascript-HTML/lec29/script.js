// practice set 6
// question 1, 2 and 3 are same
// let flag = true;

// const canDrive = (age) => {
//   return age >= 18 ? true : false;
// };

// while (flag) {
//   let age = prompt("Enter your age");
//   age = Number.parseInt(age);

//   if(age < 0) {
//     console.error("Please! Enter a valid age")
//     break;
//   }

//   if (canDrive(age)) {
//     alert("Yes! you can drive");
//   } else {
//     alert("No! you can't drive");
//   }

//   flag = confirm("Do want to check agian?");
// }

// document.write("Hey! You are in end of the program");

// question 4
// document.write("Your program is running");
// const check = (num)=> {
//     return num>4?true:false;
// }

// let num = prompt("Enter a number");
// num = Number.parseInt(num);
// if(check(num)) {
//     location.href="https://www.google.com";
// } else {
//     location.href="https://www.youtube.com";
// }

// question 5
let color = prompt("Enter the page background color");
document.body.style.backgroundColor = color;