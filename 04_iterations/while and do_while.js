// while
// let index = 0;
// while (index <= 10) {
//   // console.log(`${index}`)
//   index++;
// }

// let arr = [10, 20, 30];
// let i = 0;
// while (i < arr.length) {
//   console.log(`${arr[i]}`);
//   i++;
// }

// do while
// let value = 0;
// do {
//   // console.log(`${value}`)
//   value += 2;
// } while (value <= 10);

// Print numbers from 1 to 10 using while loop
let i = 1;
while (i <= 10) {
  // console.log(i)
  i++;
}

// Print even numbers from 1 to 20 using a while loop.
let even = 1;
while (even <= 20) {
  if (even % 2 == 0) {
    // console.log(`even numbers are ${even}`);
  }
  even++;
}

// Find the sum of numbers from 1 to 50 using a while loop.
let num = 1;
let sum = 0;
while (num <= 50) {
  sum += num;
  num++;
}
console.log(sum);

// Print numbers from 1 to 5 using a do-while loop.
let value = 1;
do {
  console.log(`${value}`);
  value++;
} while (value <= 5);
