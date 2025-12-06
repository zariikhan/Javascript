const user = {
  userName: "zaryab",
  age: 23,
  profession: "developer",
  welcome: function () {
    console.log(`welcome ${this.userName}`);
    // console.log(this);
  },
};

user.welcome();
user.userName = "ali";
user.profession = "programmer";
user.welcome();
// console.log(this)

// ************* arrow function ****************
const addition = (a, b) => {
  return a + b;
};
console.log(addition(10, 5));

const arrow = () => {
  console.log("this is arrow function");
};
arrow();

const subtraction = (num1, num2) => num2 - num1;
console.log(subtraction(10, 5));

const multiply = (num1, num2) => num1 * num2;
console.log(multiply(10, 5));

const passingObject = () => ({ user: "ali" });
console.log(passingObject());

const square = (num) => {
  return Math.pow(num, 2);
};
console.log(square(5));

const isEven = (value) => {
  if (value % 2 === 0) {
    return true;
  }
  return false;
};
isEven(13);

const greet = (user) => {
  console.log(user);
};
greet("zaryab");


