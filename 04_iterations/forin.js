// for in

let myObj = {
  js: "javaScript",
  cpp: "C++",
  py: "python",
};

for (const key in myObj) {
  // console.log(`fullform of ${key} is ${myObj[key]}`);
}

// const map = new Map();
// map.set("in", "india");
// map.set("usa", "united state of america");
// map.set("uk", "united kingdom");
// // console.log(map)
// for (const key in map) {
//     console.log(key)
// }

let str = "hello";
for (const char in str) {
  // console.log(`index ${char} => ${str[char]}`);
}

let arr = [1, 2, 3, 4, 5];
for (const key in arr) {
  // console.log(arr[key]);
}

// Use for…in to print all keys of this object:
const student = {
  name: "Zaryab",
  age: 20,
  course: "JavaScript",
};
for (const key in student) {
  // console.log(key);
}

// Using for…in, print all values of this object:
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
};
for (const value in car) {
  // console.log(car[value]);
  // console.log(`${value} : ${car[value]}`);
}

// Using for…in, count how many properties this object has:
const laptop = {
  brand: "HP",
  ram: "16GB",
  storage: "512GB",
  price: 1200,
};
let count = 0;
for (const key in laptop) {
  count++;
}
// console.log(count);

// Using for…in, print only the properties whose values are strings from this object:
const person = {
  name: "Ali",
  age: 22,
  city: "Karachi",
  country: "Pakistan",
  isStudent: false,
};
for (const key in person) {
  if (typeof person[key] === "string") {
    // console.log(key);
  }
}

// Print all keys except "age" from this object:
const studentDetail = {
  name: "Zaryab",
  age: 20,
  course: "JavaScript",
  city: "Dir Lower",
};

for (const key in studentDetail) {
  if (typeof studentDetail[key] === "string") {
    // console.log(key);
  }
}

// Print all keys whose values are numbers:
const product = {
  name: "Laptop",
  price: 1200,
  quantity: 5,
  category: "Electronics",
};
for (const key in product) {
  if (!isNaN(product[key])) {
    // console.log(key);
  }
}

// Calculate the sum of all numeric values in an object:
const scores = {
  math: 50,
  english: 40,
  science: 60,
  name: "Ali",
};
let score = 0;
for (const key in scores) {
  if (!isNaN(scores[key])) {
    score += scores[key];
  }
}
console.log(score);

// method 2
for (const key in scores) {
  if (typeof scores[key] !== "string") score += scores[key];
}
console.log(score);

// Check if a key "city" exists in an object. Print "Yes" or "No".
const user = {
  name: "Umar",
  age: 25,
  country: "Pakistan",
};

// for (const key in user) {
//   console.log(user.hasOwnProperty("city") ? "Yes" : "No");

// }

// Create a new object that contains only the string properties from an existing object:
const data = {
  name: "Zaryab",
  age: 20,
  city: "Dir Lower",
  isStudent: true,
};
let newObj = {};
for (const key in data) {
  if (isNaN(data[key])) {
    newObj[key] = data[key]
  }
}
console.log(newObj);
console.log(newObj["city"])
