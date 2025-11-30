function myName() {
  console.log("z");
  console.log("a");
  console.log("r");
  console.log("y");
  console.log("a");
  console.log("b");
}
// myName();
function addTwoNumbers(number1, number2) {
  if (number1 !== Number && number2 !== Number) {
    console.log("plz enter a valid number");
    return;
  }
  console.log(number1 + number2);
}
addTwoNumbers(10, "");

function subTwoNumbers(num1, num2) {
  console.log(num1 - num2);
}
subTwoNumbers(10, 4);

function multiplyTwoNumber(num1, num2) {
  //   return num1 * num2;
}
function multiplyTwoNumber(num1, num2) {
  let result = num1 * num2;
  return result;
}
let result = multiplyTwoNumber(10, 5);
console.log(result);

function userLoggedIn(userName) {
  if (userName === undefined) {
    console.log("plz enter your name");
    return;
  }
  return `${userName} has just logged in`;
}
let output = userLoggedIn();
console.log(output);

function passingValues(...num1) {
  return num1;
}
console.log(passingValues(100, 200, 300, 400, 500, 600));

// passing Object through function
let obj = {
  cousre: "javaScript",
  price: 2000,
};
function passingObject(anyObject) {
  return `course is ${anyObject.cousre} and price is ${anyObject.price}`;
}
// console.log(passingObject(obj));
console.log(
  passingObject({
    cousre: "programming fundamentals",
    price: 2000,
  })
);

// passing array through function
let arr = [12, 3, 4, 67, 89, 300];

function passingArray(getArray) {
  return getArray[3];
}
// console.log(passingArray(arr))
console.log(passingArray([12, 3, 4, 78, 90]));

// questions
function greet() {
  console.log("Hello world");
}
greet();

function addition(num1, num2) {
  return num1 + num2;
}
console.log(addition(5, 7));

function square(num1) {
  return Math.pow(num1, 2);
}
console.log(square(5));

function findMax(num1, num2) {
  return Math.max(num1, num2);
}
console.log(findMax(10, 20));

function isEven(num1) {
  if (num1 % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}
isEven(10);

function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
console.log(fullName("Ali", "khan"));

function toCelcius(fahrenheit) {
  let celcius = ((fahrenheit - 32) * 5) / 9;
  return celcius.toFixed(2);
}
console.log(toCelcius(900));

function greetUser(name = "guest") {
  return `hello ${name}`;
}
console.log(greetUser("zaryab"));

function findMaxNumber(...num1) {
  return Math.max(...num1);
}
console.log(findMaxNumber(10, 20, 30));

function isPrime(primeNum) {
  if (primeNum <= 1) {
    return false;
  }
  for (i = 2; i < primeNum; i++) {
    if (primeNum % i === 0) return false;
  }
  return true;
}
console.log(isPrime(5));

function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(3));

function checkingWords(statement) {
  return statement.includes("javaScript");
}
console.log(checkingWords("i am learning javaScript"));
console.log(checkingWords("i am learning coding"));
