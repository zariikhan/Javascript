class user {
  constructor(userName, email) {
    this.userName = userName;
    this.email = email;
  }

  welcome() {
    console.log(`welcome ${this.userName}`);
  }
}

const user1 = new user("ali", "ali@123gmail.com");
// console.log(user1);
// user1.welcome();

// function user2(userName, email) {
//   this.userName = userName;
//   this.email = email;
// }

// const user3 = new user2("jawad","jawad@4434gmail.com")
// console.log(user3)

class Parent extends user {
  constructor(userName, email, password) {
    super(userName, email);
    this.password = password;
  }
  message() {
    console.log("this is parent class");
  }

  static owner() {
    console.log("i am the owner");
  }
}
const child = new Parent("khalid", "khalid@1324", "3457");
// console.log(child);
// child.welcome();
// child.message();
// child.owner();

// console.log(Parent instanceof user); // false

class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const zarii = new person("zarii", 35);
console.log(zarii);
zarii.greet();

class Car {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }
  details() {
    console.log(`Brand: ${this.brand}, year: ${this.year}`);
  }
}

const honda = new Car("Honda", 2023);
honda.details();

class Animal {
  sound() {
    console.log("Animal makes sound");
  }
}
class Dog extends Animal {
  bark() {
    console.log("Dog barks");
  }
}

const german = new Dog("german");
german.sound();
german.bark();

class Student {
  constructor(name) {
    this.name = name;
  }
}
class Admin extends Student {
  constructor(name) {
    super(name);
    this.role = "admin";
    this.status = "single";
  }
}

const ali = new Admin("Ali");
console.log(ali);

class Calculator {
  static multiply(a, b) {
    return a * b;
  }
}
console.log(Calculator.multiply(2, 3));

class Programmer {
  constructor(name) {
    this.name = name;
  }
  static company = "Google";
}
const jawad = new Programmer("khan");
console.log(jawad.name);
console.log(Programmer.company)