function stud(email, passwoord) {
  this._email = email;
  this._passwoord = passwoord;

  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.split();
    },
    set: function (value) {
      this._email = value;
    },
  });
}
const user1 = new stud("user@123gmail.com", 346);
console.log(user1.email);
