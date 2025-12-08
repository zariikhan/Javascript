/*datatypes
 1) Primitive datatypes
 Number
 String
 Boolean => true/false
 null
 undefined
 Symbol => uniqueness
 BigInt => write n after the number*/

let name = "ali";
console.log(typeof name);

let age = 20;
console.log(typeof age);

let marks = null;
console.log(typeof marks);

let score = 0;
console.log(typeof score);

let fatherName;
console.log(typeof fatherName);

let isloggedIn = true;
console.log(typeof isloggedIn);

let ages = [];
console.log(typeof ages);

let output = {};
console.log(typeof output);

let BigInt = 12345678909866n;
console.log(typeof BigInt);

let value = 23;
console.log(value);

let id = Symbol("123");
console.log(typeof id);

let anotherId = Symbol("123");
console.log(id == anotherId);

/*2) Non Primitive datatypes
 Object
 function
 array*/

const myObj = {
  name: "zaryab",
  age: 23,
};

console.log(typeof myObj);

let heroes = ["superman", "spiderman", "thor"];
console.log(heroes)
console.log(typeof heroes);

let stud = {
  name: "khan",
};
console.log(stud);

function myName() {
  console.log("zaryab khan");
}
console.log(typeof myName);
