function User(userName, age) {
  this.userName = userName;
  this.age = age;
  console.log("called");
}

function CreateUser(userName, age, email, password) {
  User.call(this, userName, age);
  this.email = email;
  this.password = password;
}
const user1 = new CreateUser("zaryab", 23, "akhn@123gmail.com", 203747);
console.log(user1);

const person = {
  name: "zaryab",
};

function greet() {
  console.log(`hello ${this.name}`);
}
greet.call(person);

function introduce(city, country) {
  console.log(`my name is ${this.name} and i live in ${city}, ${country}`);
}
const user = {
  name: "zaryan",
};

// introduce.call(user, "kpk", "pakistan");

function printAge() {
  console.log(this.age);
}

const person1 = {
  age: 23,
};

// printAge.call(person1);

const userObj = {
  name: "zaryab khan",
};
function seyHello() {
  console.log(`Hello ${this.name}`);
}

seyHello.call(userObj);

function person2(name, age) {
  this.name = name;
  this.age = age;
}

function employee(name, age, salary) {
  person2.call(this, name, age);
  this.salary = salary;
}
const employee1 = new employee("zaryab", 23, 20000);
console.log(employee1);

function Parent(name) {
  this.name = name;
}

function Child(name, school) {
  Parent.call(this, name);
  this.school = school;
}

const c1 = new Child("Ali", "ABC School");
console.log(c1);
