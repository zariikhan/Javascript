const myName = "zaryab         ";
const address = "ouch          ";
String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`trueLength is ${this.trim().length}`);
};
myName.trueLength();
"ali".trueLength();
let cars = ["honda", "prius"];

let carsObj = {
  model: 2023,
  price: 2000000,
};

Object.prototype.property = function () {
  console.log("this is available with all elements");
};

// carsObj.property();
// cars.property();

Array.prototype.arrayProperty = () => {
  console.log("this is just array property");
};
// cars.arrayProperty();

// let animal = {
//   name: "lion",
// };

let run = {
  running: true,
};
let eat = {
  eat: true,
};

let sleep = {
  sleep: true,
};

// animal.__proto__ = run;
// animal.__proto__ = eat

Object.setPrototypeOf(animal, run);
console.log(animal.running);

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(`Welcome ${this.name}`);
};

const obj1 = new Person("zaryab", 23);
const obj2 = new Person("ali", 33);
obj1.greet();
obj2.greet();

