// comparison opeartor
// ==
// >=
// <=
// >
// <
// === => for comparing value and its type
// !==
// !=

console.log(1 == 2);
console.log(1 > 2);
console.log(1 < 2);
console.log(3 >= 4);
console.log("1" == 1);

console.log(null > 0);
console.log(null < 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined == 0);
console.log(undefined >= 0);

console.log(1 != 2);
console.log(1 === 2);
console.log("1" === 2);
console.log("1" !== 2);

let age = 18;
console.log(age >= 18);

console.log("apple" > "App");
console.log(undefined === null);
console.log("5" > 4);
console.log("0" == false);
console.log([] == 0);
console.log(" " == 0);

// *----------------------------------------------*
// 1) stack (primitive)
// 2) Heap (non primitive)

let userEmail = "abc123@gmail.com";
console.log(userEmail);

let anotherUser = userEmail;
anotherUser = "abc456@gmail.com";
console.log(anotherUser);
console.log(userEmail);

let user = {
  email: "khan23@gmail.com",
  age: 34,
};

let userOne = user;
userOne.email = "ali34@gmail.com";
console.log(userOne.email);
console.log(user.email);
