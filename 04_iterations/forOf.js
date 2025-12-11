// for of

let str = "hello world!";
for (const value of str) {
  // console.log(value)
}

let arr = [1, 2, 3, 4, 5];
for (const num of arr) {
  //   console.log(num);
}

let heroes = ["thor", "spiderMan", "batMan"];
for (const hero of heroes) {
  //   console.log(hero);
}

const map = new Map();
map.set("in", "india");
map.set("usa", "united state of america");
map.set("uk", "united kingdom");
// console.log(map)

// let myObj = {
//   js: "javaScript",
//   cpp: "C++",
//   py: "python",
// };

// for (const key of myObj) {
//   console.log(key);
// }
for (const i of map) {
  // console.log(i)
}

const fruits = ["apple", "banana", "mango", "orange"];
for (const element of fruits) {
  //   console.log(element);
}

// Using for...of, print the sum of all numbers in this array:
const numbers = [10, 20, 5, 15];
let sum = 0;
for (const num of numbers) {
  // sum+=num
  sum = sum + num;
}
// console.log(sum);

// Using for...of, print only the names whose length is greater than 4:
const names = ["Ali", "Zaryab", "Umar", "Jawad", "Asad"];
for (const value of names) {
  if (value.length > 4) {
    console.log(value);
  }
}

// Using for...of, count how many numbers in this array are even:
const nums = [3, 6, 8, 11, 14, 20];
let count = 0;
for (const num of nums) {
  if (num % 2 === 0) {
    // count+=1
    count++;
  }
}
console.log(count);

// Using for...of, print the characters of this string:
const word = "JavaScript";
for (const characters of word) {
  console.log(characters);
}
