let mySym = Symbol("key1");

const stud1 = {
  name: "ali khan",
  "father name": "khalid",
  [mySym]: "key12",
  age: 19,
  class: "2nd",
  subjects: ["maths", "english", "urdu"],
};

console.log(stud1);

console.log(stud1.name);

console.log(stud1["class"]);

stud1.name = "furqan";

stud1["age"] = 20;

stud1.subjects[1] = "science";

// Object.freeze(stud1)
console.log(stud1["father name"]);

stud1.class = "3rd";

console.log(stud1);

stud1.greeting = () => {
  console.log("hello students");
};

stud1.greeting2 = function () {
  console.log(`hello Mr ${this.name}`);
};

console.log(stud1.greeting());
console.log(stud1.greeting2());

// singleton object
// const user1 = new Object()

const user1 = {};
user1.name = "ghauri";
user1.email = "ghauri123@gmail.com";
user1.address = "ckd";
console.log(user1);

console.log(user1.hasOwnProperty("address"));
console.log(Object.keys(user1));
console.log(Object.values(user1));
console.log(Object.entries(user1));

const user2 = {
  email: "user2@gmail.com",
  information: {
    fullName: {
      firstName: "harry",
      lastName: "brook",
    },
  },
};
console.log(user2.information.fullName.firstName);

const obj1 = { A: "Apple", B: "Banana" };
const obj2 = { S: "Strawberry", M: "Mango" };

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({}, obj1, obj2);
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

const course = {
  name: "python",
  price: "20k",
  duration: "4 hours",
};

const { name, price: amount } = course;
console.log(name);
console.log(amount);

// questions
const students = {
  name: "ali",
  age: 20,
  isPass: true,
};
console.log(students.age);
console.log(students["age"]);
console.log(students);

const car = {
  brand: "toyota",
  model: "corolla",
  year: "2020",
};
car.color = "black";
console.log(car);
console.log(car.brand);

const person = {
  firstName: "zaryab",
  lastName: "khan",
  age: 23,
};
person.age = 24;
console.log(person);

const product = {
  name: "laptop",
  price: 50000,
  brand: "hp",
};
product.quantity = 3;
console.log(product);

const book = {
  title: "solid state physics",
  author: "neil w Aschcroft",
  year: 1990,
};
delete book.year;
console.log(book);
console.log(typeof book);
console.log(Object.isFrozen(book))

let jsonObject = JSON.stringify(book)
console.log(jsonObject)

let bookObject = JSON.parse(jsonObject)
console.log(book)