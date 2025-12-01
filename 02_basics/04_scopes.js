// var c = 100

let a = 200;
if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
  console.log(a);
}

console.log(a);
// console.log(b);
console.log(c);

function printing() {
  const userName = "zaryab";
  function job() {
    const title = "developer";
    console.log(userName);
  }
  //   console.log(title)
  job();
}
printing();

if (true) {
  const userName = "ahmad";
  if (userName === "ahmad") {
    const post = "teacher";
  }
  console.log(userName);
}
// console.log(post)

console.log(addition(10));
function addition(num) {
  return num + 1;
}
const subtraction = function (value) {
  return value - 1;
};
console.log(subtraction(10));
