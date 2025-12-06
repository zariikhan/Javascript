(function greeting() {
  console.log("welcome");
})(); // named iife

(function passingNames(names) {
  console.log(names);
})("zaryab");

((num1, num2) => {
  console.log(num1 + num2);
})(10, 5);

((print) => {
  console.log(print);
})("hello from IIFE");

((num) => {
  if (num > 0) {
    console.log("positive");
  } else if (num < 0) {
    console.log("negative");
  } else {
    console.log("zero");
  }
})(-10);

((num) => {
  console.log(Math.pow(num, 3));
})(4);

console.log(
  (calculate = (a, b, operator) => {
    if (operator === "+") {
      return a + b;
    }
    if (operator === "-") {
      return a - b;
    }
    if (operator === "*") {
      return a * b;
    }
    if (operator === "/") {
      return a / b;
    }
  })(8, 4, "*")
);

console.log(
  ((num) => {
    if (num % 3 === 0 && num % 5 === 0) return "fizzBuzz";
    if (num % 3 === 0) return "fizz";
    if (num % 5 === 0) return "buzz";
    return num;
  })(15)
);

console.log(
  ((num) => {
    if (num % 3 === 0 && num % 5 === 0) {
      return "fizzBuzz";
    } else if (num % 3 === 0) {
      return "fizz";
    } else if (num % 5 === 0) {
      return "buzz";
    } else {
      return num;
    }
  })(3)
);

(function greet(names) {
  console.log(`welcome ${names}`);
})("zaryab");

((a, b) => {
  console.log(Math.max(a, b));
})(10, 5);


