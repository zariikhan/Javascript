// filter

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const filterNumbers = num.filter((num) => {
//   return num > 4;
// });

// let newArr = []
// num.forEach((num)=>{
//     if (num > 4) {
//         newArr.push(num)
//     }
// })
// console.log(newArr)
// console.log(filterNumbers);

let books = [
  {
    title: "english",
    genre: "science",
    publish: 1980,
    edition: 2018,
  },
  {
    title: "maths",
    genre: "science",
    publish: 1988,
    edition: 2000,
  },
  {
    title: "huminities",
    genre: "arts",
    publish: 1970,
    edition: 2010,
  },
  {
    title: "social science",
    genre: "arts",
    publish: 1989,
    edition: 2011,
  },
  {
    title: "pak-study",
    genre: "history",
    publish: 1947,
    edition: 2015,
  },
  {
    title: "general maths",
    genre: "science",
    publish: 2004,
    edition: 2023,
  },
];

let availableBooks = books.filter(
  (bk) => bk.genre === "science" && bk.edition > 2000
);
// console.log(availableBooks);

// Use filter to create a new array containing only even numbers:

const numbers = [10, 15, 20, 25, 30];
let evenNumbers = numbers.filter((num) => num % 2 === 0);
// console.log(evenNumbers);

// Using filter, create a new array that contains only strings from this array:

const mixed = [10, "Ali", 20, "Zaryab", 30];
let stringArray = mixed.filter((char) => typeof char === "string");
// console.log(stringArray);

// Using filter, create a new array containing only numbers greater than 20

const nums = [10, 25, 30, 15, 50];
let greaterNums = nums.filter((val) => val > 20);
// console.log(greaterNums);

// Using filter, get all names that have more than 4 letters:

const names = ["Ali", "Zaryab", "Umar", "Jawad", "Asad"];
let letters = names.filter((char) => char.length > 4);
// console.log(letters);

// You have an array of user objects. Use filter to get all active users:

const users = [
  { name: "Ali", isActive: true },
  { name: "Zaryab", isActive: false },
  { name: "Umar", isActive: true },
  { name: "Jawad", isActive: false },
];

const activeUsers = users.filter((item) => item.isActive === true);
console.log(activeUsers);

// You have an array of products. Use filter to get all products with price less than 1000:

const products = [
  { name: "Laptop", price: 1200 },
  { name: "Keyboard", price: 500 },
  { name: "Mouse", price: 300 },
  { name: "Monitor", price: 1500 },
];

const product = products.filter((price) => price.price < 1000);
console.log(product);
