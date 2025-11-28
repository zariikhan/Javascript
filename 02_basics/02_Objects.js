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
