// object literal

// const user = {
//   userName: "Zaryab khan",
//   age: 23,
//   isLoggedIn: true,

//   greeting: function () {
//     console.log(`welcome ${this.userName}`);
//     // console.log(this)
//   },
// };
// console.log(user.age);
// console.log(user["userName"]);
// console.log(user.greeting());

// console.log(this)

function user(userName, userAccount, isLoggedIn) {
  this.userName = userName;
  this.userAccount = userAccount;
  this.isLoggedIn = isLoggedIn;
  return this;
}
const user1 = new user("zaryab", 24, true);
const user2 = new user("ali", 34, true);
const user3 = new user("jawad", 4, false);
// console.log(user1);
// console.log(user2);
// console.log(user3);
// console.log(user1 instanceof user);

function person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function greet() {
    console.log(`hello, my name is ${this.name}`);
  };
}

const obj1 = new person("ali", 23);
const obj2 = new person("jawad", 34);
// console.log(obj1);
// console.log(obj2);
// obj1.greet();
// obj2.greet();

function car(brand, year) {
  this.brand = brand;
  this.year = year;
  this.detail = function detail() {
    console.log(`Brand:< ${this.brand} >, Year:< ${this.year} >`);
  };
}
const honda = new car("honda city", 2023);
// honda.detail();

function bankAccount(ownerName, balance) {
  this.ownerName = ownerName;
  this.balance = balance;
  this.deposit = function deposit(amount) {
    this.balance += amount;
    console.log(`Deposited : ${this.amount}`);
    console.log(`Balance: ${this.balance}`);
  };
  this.withDraw = function withDraw(amount) {
    if (amount > this.balance) {
      console.log("insufficeint balance");
    }
    this.balance -= amount;
    console.log(`Withdrawn: ${amount}`);
    console.log(`Balance: ${this.balance}`);
  };
}
const account1 = new bankAccount("zaryab", 100000);
console.log(account1);
account1.deposit(20000);
account1.withDraw(20000);
