class User {
  constructor(email, passwoord) {
    this.email = email;
    this.passwoord = passwoord;
  }
  get email() {
    return this._email.toUpperCase();
  }

  set email(value) {
    this._email = value;
  }

  get passwoord() {
    return this._password.toLocaleString();
  }

  set passwoord(data) {
    this._password = data;
  }
}
const user1 = new User("user@user234gmail.com", 1234);
console.log(user1.email);
console.log(user1.passwoord);

const user = {
  firstName: "zaryab",
  lastName: "khan",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(user.fullName);

const account = {
  _balance: 100,

  set balance(value) {
    if (value >= 0) {
      this._balance = value;
    } else {
      console.log("invalid balance");
    }
  },
  get balance() {
    return this._balance;
  },
};
console.log(account.balance);

class Person {
  constructor(age) {
    this.age = age;
  }
  set age(value) {
    if (value > 0) {
      this._age = value;
    } else {
      console.log("invalid age");
    }
  }
  get age() {
    return this._age;
  }
}
const ali = new Person(10);
console.log(ali.age);
