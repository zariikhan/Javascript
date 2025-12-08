// if

if (true) {
  console.log("the code will execute");
}

let userLoggedIn = false;

// if(userLoggedIn){
//     console.log("the user has logged in")
// }

// comparison operator
// ==, ===, !=, !==, >=, <=, <, >

// if else

if (userLoggedIn) {
  console.log("the user has logged in");
} else {
  console.log("the user hasn't logged in");
}

let balance = 1000;
if (balance <= 500) {
  console.log("balance is greater than 500");
} else {
  console.log("balance is greater than 500");
}

// else if
let marks = 10;
if (marks >= 90) {
  console.log("Grade is A+");
} else if (marks >= 75) {
  console.log("Grade is A");
} else if (marks >= 60) {
  console.log("Grade is c");
} else {
  console.log("Grade is B");
}

// switch
switch (marks) {
  case 90:
    console.log("Grade is A+");
    break;
  case 75:
    console.log("Grade is A");
    break;
  case 60:
    console.log("Grade is C");
    break;
  default:
    console.log("Grade is B");
    break;
}

// truthy values => "0", "false"," ", {}, [], function(){}
// falsy values => "", 0, -0, false, bigInt, null, undefined, NaN

let score = [];
if (score.length === 0) {
  console.log("Array is empty");
}

let books = {};
if (Object.keys(books).length === 0) {
  console.log("object is empty");
}

// let age = " ";
// if (age == " ") {
//   console.log("age is 0");
// }

// ?? null : undefined
let value;
// value = null ?? 10
// value = undefined ?? 50
value = null ?? 40 ?? 20;
console.log(value);

// ternory oprator
let age = 18;
(age >= 18) ? console.log("you can drive") : console.log("you can't drive");
