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
