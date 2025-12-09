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

// age >= 18 ? console.log("you can drive") : console.log("you can't drive");

// Write a program that checks a number and prints:
// "Positive" if the number is greater than 0
// "Negative" if the number is less than 0
// "Zero" if the number is exactly 0

let num = 7;
if (num > 0) {
  console.log("positive");
} else if (num < 0) {
  console.log("negative");
} else if (num == 0) {
  console.log("zero");
} else {
  console.log("NaN");
}

// Write a program that checks a person’s age and prints:
// "Child" if age < 12
// "Teenager" if age is between 13 and 19
// "Adult" if age is 20 or above
// "Invalid age" if age is negative
let age = 20;
if (age < 12) {
  console.log("child");
} else if (age >= 13 && age <= 19) {
  console.log("teenager");
} else if (age >= 20) {
  console.log("adult");
} else if (age < 0) {
  console.log("invalid age");
}

// Write a program that checks a number and prints:
// "Even" if the number is divisible by 2
// "Odd" if not
// "Invalid" if the value is not a number
if (isNaN(num)) {
  console.log("invalid");
} else if (num % 2 == 0) {
  console.log("even");
} else {
  console.log("odd");
}

// Write a program that checks three numbers and prints the largest one.


let a = 10;
let b = 25;
let c = 7;
if (b > a && b > c) {
  console.log(`${b}`);
} else if (a > b && a > c) {
  console.log(`${a}`);
} else {
  console.log(`${c}`);
}

// Write an if else statement that prints:
// "eligible to vote" if age >= 18
// "not eligible" otherwise

(age>=18)? console.log("eligible to vote") : console.log("not eligible")

let x=10
let y=20
if(x>y){
  console.log(`${x}`)
}else{
  console.log(`${y}`)
}