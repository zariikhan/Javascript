// console.log(Math.PI)
// Math.PI = 4
// console.log(Math.PI)

const pi = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(pi);

const student = {
  name: "zaryab",
  address: "ouch",
};
console.log(Object.getOwnPropertyDescriptor(student, "name"));
for (let key in student) {
  console.log(`${key} : ${student[key]}`);
}
const descriptor = Object.defineProperty(student, "name", {
  writable: false,
  //   enumerable: false,
});
console.log(descriptor);

// we can also add new property
// const descriptor = Object.defineProperty(student, "year", {
//   value: "2000",
// });
// console.log(descriptor);

const desc = Object.defineProperties(student, {
  name: {
    writable: false,
    enumerable: false,
  },
  address: {
    writable: false,
    enumerable: false,
  },
});
// console.log(desc);

const user = {
  name: "zaryab",
};

console.log(Object.getOwnPropertyDescriptor(user, "name"));

const product = {
  price: 2000,
};

Object.defineProperty(product, "price", {
  writable: false,
  enumerable: true,
});

console.log(Object.getOwnPropertyDescriptor(product, "price"));
