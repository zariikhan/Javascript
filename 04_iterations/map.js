// Map

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr = [];
let newNums = num.map((num) => {
  if (num > 4) return arr.push(num + 10);
});
// console.log(newNums)
// console.log(arr);

// chaining
let arr2 = [1, 2, 3, 4, 5, 6, 7];
let newarr = arr2
  .map((num) => num / 2)
  .map((num) => num + 10)
  .filter((num) => num > 11);
// console.log(newarr);

// Use map to create a new array where each number is doubled:
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers);

// Use map to convert each fruit to uppercase:
const fruits = ["apple", "banana", "mango"];
let upperFruits = fruits.map((val) => {
  return val.toUpperCase();
});
// console.log(upperFruits);

// Use map to get a new array containing the length of each string:
const names = ["Ali", "Zaryab", "Umar"];
let namesLength = names.map((val) => val.length);
// console.log(namesLength);

// Use map to create a new array of objects where each number is converted like this:
const nums = [1, 2, 3];
const numsObj = nums.map((num) => {
  return { value: num };
});
// console.log(numsObj);

// Use map to add 10 to each product price:
const prices = [100, 200, 300];
const addPrices = prices.map((num) => num + 10);
// console.log(addPrices);

// You receive user data from an API. Use map to return only user names:
const users = [
  { id: 1, name: "Ali", age: 22 },
  { id: 2, name: "Zaryab", age: 20 },
  { id: 3, name: "Umar", age: 25 },
];
const usereNames = users.map((val) => {
  return val.name;
});
// console.log(usereNames);

// You get product data from backend. Use map to return a new array like this:

const products = [
  { name: "Laptop", price: 1200 },
  { name: "Mouse", price: 300 },
  { name: "Keyboard", price: 500 },
];

const newProducts = products.map((value) => {
  return {
    ...value,
    instock: true,
  };
});
// console.log(newProducts);

// You receive user data from an API.
// Use map to return a new array where:
// fullName is created by combining firstName and lastName
// isAdult is true if age >= 18, otherwise false
const apiUsers = [
  { id: 1, firstName: "Ali", lastName: "Khan", age: 22 },
  { id: 2, firstName: "Umar", lastName: "Farooq", age: 16 },
  { id: 3, firstName: "Zaryab", lastName: "Ahmad", age: 20 },
];

const mapUsers = apiUsers.map((num) => {
  return {
    id: num.id,
    fullName: `${num.firstName} ${num.lastName}`,
    isAdult: num.age >= 18,
  };
});
console.log(mapUsers);
