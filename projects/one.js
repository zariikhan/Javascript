const profile = {
  name: "zaryab",
  email: "zaryab123@youtube.com",
  age: 23,
  isLoggedIn: true,
};
profile.age = 25;
profile.lastLogin = "sunday";
// console.log(profile);

// let cart = [499, 1299, 299, 799];
// let total = cart.reduce((acc, currVal) => {
//   return acc + currVal;
// }, 0);
// let discount = total * 0.1;
// let finalAmount = total - discount;
// console.log(`total = ${total}`);
// console.log(`final payable amount ${finalAmount}`);

// let price = "500";
// let tax = 50;
// console.log(Number(price) + tax);

// let marks = [78, 85, 90, 66, 88];
// let total = marks.reduce((acc, currVal) => {
//   return acc + currVal;
// });
// console.log(total);
// let averageMarks = total / marks.length;
// console.log(averageMarks);

// let highestMarks = Math.max(...marks);
// console.log(highestMarks);
// if (averageMarks >= 60) {
//   console.log("pass");
// } else {
//   console.log("fail");
// }

let products = [
  { name: "Laptop", price: 80000 },
  { name: "Mouse", price: 1500 },
  { name: "Keyboard", price: 3000 },
];

let productsNames = products.map((value) => value.name);
// console.log(productsNames);
let totalprices = products.reduce((acc, currval) => {
  return acc + currval.price;
}, 0);
// console.log(totalprices);
let updatedPrices = products.map((num) => {
  return {
    ...num,
    price: num.price + num.price * 0.05,
  };
});
// console.log(updatedPrices);

let arr = [];
// console.log(arr.length === 0);

let obj = {};
// console.log(Object.keys(obj).length === 0);

let expenses = [
  { title: "Food", amount: 500 },
  { title: "Taxi", amount: 200 },
  { title: "Shopping", amount: 1000 },
];
let totalExpenses = expenses.reduce((acc, currval) => {
  return acc + currval.amount;
}, 0);
console.log(totalExpenses);

let highestExpense = expenses.reduce((acc, currval) => {
  return currval.amount > acc.amount ? currval : acc;
}, expenses[0]);
console.log("Highest Expense:", highestExpense.amount);
console.log(`title of highest expense is ${highestExpense.title}`);
