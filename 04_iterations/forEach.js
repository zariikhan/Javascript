// forEach

let heroes = ["thor", "spiderMan", "batMan"];

// heroes.forEach(function(value){
// console.log(value)
// })

// heroes.forEach((value)=>{
// console.log(value)
// })

// function print(value){
//     console.log(value)
// }
// heroes.forEach(print)

heroes.forEach((index, value, arr) => {
  // console.log(index, value, arr);
});

let languages = [
  {
    languageName: "javaScript",
    languageShortcut: "js",
  },
  {
    languageName: "python",
    languageShortcut: "py",
  },
  {
    languageName: "java",
    languageShortcut: "java",
  },
];
languages.forEach((val) => {
  // console.log(val.languageName);
});

// Print each number from this array:
const nums = [1, 2, 3, 4, 5];
// nums.forEach((num) => [console.log(num)]);

// Using forEach, print each fruit in UPPERCASE:
const fruits = ["apple", "banana", "mango"];
fruits.forEach((value) => {
  console.log(value.toUpperCase());
});

// Using forEach, print only the even numbers:
const numbers = [10, 15, 20, 25, 30];
numbers.forEach((num) => {
  if (num % 2 === 0) {
    // console.log(num);
  }
});

// Using forEach, calculate the sum of all numbers:
const values = [5, 10, 15, 20];
let sum = 0;
values.forEach(function (val) {
  sum += val;
});
// console.log(sum);

// Using forEach, create a new array that contains the square of each number:
const num = [2, 4, 6];
let newArray = [];
num.forEach((val) => {
  const value = Math.pow(val, 2);
  // newArray.push(val**2);
  newArray.push(value);
});
console.log(newArray);

// Using forEach, count how many strings have length greater than 4:
const names = ["Ali", "Zaryab", "Umar", "Jawad", "Asad"];
names.forEach((char) => {
  if (char.length > 4) {
    console.log(char);
  }
});

// From this array, create a new array that contains only even numbers using forEach:
const nom = [3, 6, 8, 11, 14, 20];
let evenNum = [];
nom.forEach((num) => {
  if (num % 2 === 0) evenNum.push(num);
});
console.log(evenNum);

// Using forEach, find the largest number in this array:
const numbers1 = [10, 45, 3, 99, 23];
let maxNum = [0];
numbers1.forEach((num) => {
  if (num > maxNum) {
    maxNum = num;
  }
});
console.log(maxNum);

// Convert this array into an object where the key is the index and the value is the element using forEach:
const colors = ["red", "green", "blue"];
let newObj = {};
colors.forEach((val, index) => {
  newObj[index] = val;
});
console.log(newObj);

// Count how many times each element appears in this array using forEach:
const fruit = ["apple", "banana", "apple", "orange", "banana", "apple"];
let obj = {};
fruit.forEach((fruit) => {
  if (obj[fruit]) {
    obj[fruit]++;
  } else {
    obj[fruit] = 1;
  }
});
console.log(obj)