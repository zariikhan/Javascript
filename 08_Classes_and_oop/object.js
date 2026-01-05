function user(userName, age) {
  this.userName = userName;
  this.age = age;
}
user.prototype.incrementAge = function () {
  console.log(this.age++);
  console.log(this.age);
};
user.prototype.print = function () {
  console.log(`userName is ${this.userName}`);
};
const user1 = new user("ali", 23);
const user2 = new user("jawad", 34);

user1.print();
user1.incrementAge();
user2.print();

