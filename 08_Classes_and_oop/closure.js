// lexical
function outer() {
  let name = "lexical";
  function inner() {
    console.log(name);
  }

  function innerTwo() {
    console.log("innerTwo", name);
  }
  inner();
  innerTwo();
}
outer();

// closure
function inIt() {
  let name = "closure";
  function print() {
    console.log(name);
  }
  return print;
}
const result = inIt();
result();

function outer() {
  let x = 20;
  function inner() {
    console.log(x);
  }
  inner();
}

outer();

function counter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

const c1 = counter();
c1();
c1();

function outer() {
  let msg = "Hello";

  return function inner() {
    console.log(msg);
  };
}

const fn = outer();
fn();
