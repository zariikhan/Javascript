// for

for (let i = 0; i <= 500; i++) {
  // console.log(`i = ${i}`)
}

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 6) {
    // console.log("my best number is ", element);
  }
  //   console.log(i);
}

let array = [10, 20, 30, 40, 50];
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  //   console.log(element);
}

for (let i = 0; i <= 10; i++) {
  const element = i;
  //   console.log(i);
  for (let j = 0; j <= 10; j++) {
    const element = j;
    // console.log(`${i} * ${j} = ${i * j}`);
  }
}

// break
for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 6) {
    // console.log("final number is", element);
    break;
  }
  // console.log(i);
}

// continue
for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 6) {
    // console.log("final number is", element + " but continue you work");
    continue;
  }
  // console.log(i);
}

// Print numbers from 1 to 10
for (let i = 0; i <= 10; i++) {
  const element = i;
  // console.log(element);
}

// Print even numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
  // console.log(`numbers is ${i}`);
  if (i % 2 == 0) {
    // console.log(`even numbers are ${i}`);
  }
}

// Print the sum of numbers from 1 to 10.
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
// console.log(sum);

// Print the multiplication table of 5 from 1 to 10.
for (let i = 5; i <= 5; i++) {
  for (let j = 1; j <= 10; j++) {
    // console.log(`${i} * ${j} = ${i * j}`);
  }
}
// or
for (let i = 1; i <= 10; i++) {
  // console.log(`5 * ${i} = ${5 * i} `);
}

// Count how many numbers between 1 and 50 are divisible by 3.
let count = 0;
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0) {
    count++;
  }
}
console.log(count);

// Print reverse counting from 10 to 1.
for (let i = 10; i >= 1; i--) {
console.log(i)
}
