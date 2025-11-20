// Convert the string "25" into a number and log its datatype.

let str = "25";

let numString = Number(str);
console.log(numString);
console.log(typeof numString);

// Convert the number 50 into a string using two different methods.
let num = 50;
let stringNum = String(num);
console.log(typeof stringNum);
console.log(num.toString());

// What will be the output of:
console.log("10" - 5); // => 5
console.log("10" + 5); // => 105

// Convert true into a number.
let isLoggedIn = true;
let stage = Number(isLoggedIn);
console.log(stage);

console.log((10 + 5) * 2 - 8 / 4);

console.log(5 % 2);
console.log(10 % 3);

// Convert "123abc" into a number and check its datatype.
let value = "123abc";
console.log(typeof value);
console.log(value);

let numValue = Number(value);
console.log(typeof numValue);
console.log(numValue);

// 1️⃣ Use Number() to convert false
let score = 0;
let boolean = Boolean(score);
console.log(boolean);
console.log(typeof boolean);

// 2️⃣ Use Boolean() to convert 1
let output = true;
let final = Number(output);
console.log(final);

// Write code that adds two numbers and also adds two strings.
let a = "4";
let b = "10";
let c = a + b;
console.log(c);

// You have two variables:
let x = "15";
let y = "5";
// Convert them to numbers and calculate x * y.
// Print the result and its datatype.

let X = Number(x);
let Y = Number(y);
let Z = X * Y;
console.log(Z);
console.log(typeof Z);

// What will be the output of:
console.log("20" / "4"); // => 5
console.log("20" + "4"); // => 204
console.log("20" - "4"); // => 16
console.log("20" * "4"); // 80

// Convert the string "false" into a boolean and print it.
let finalString = "false";
let finalBoolean = Boolean(finalString);
console.log(finalString);
console.log(typeof finalString);

// You have:
let marks = "100";
// Convert it to a number
// Add 50
// Convert the result back to a string and print its datatype

let finalMarks = Number(marks);
let result = finalMarks + 50;
console.log(result);
let finalResult = String(result);
console.log(typeof finalResult);

console.log(5 + 3 - '2');
console.log(5 + 3 + '2');

// Calculate the result and print its datatype:
let num1 = "10";
let num2 = "2";
let num3 = Number(num1) / Number(num2) + true;
console.log(num3);
console.log(typeof num3);
