// reduce
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let result = num.reduce((acc, currVal) => {
//   return acc + currVal;
// }, 0);
// console.log(result);

// Use reduce to find the sum of all numbers in this array:
const numbers = [10, 20, 30, 40];
const addNumbers = numbers.reduce((acc, currVal) => {
  return acc + currVal;
}, 0);
console.log(addNumbers);

// Use reduce to find the maximum number in this array:

const nums = [5, 12, 8, 20, 7];
const maxNum = nums.reduce((acc, currVal) => {
  return currVal > acc ? currVal : acc;
});
console.log(maxNum);

// Use reduce to count how many times each element appears in this array:
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const fruitCount = fruits.reduce((acc, fruit) => {
  if (acc[fruit]) {
    acc[fruit] += 1;
  } else {
    acc[fruit] = 1;
  }
  return acc;
}, {});
console.log(fruitCount);
