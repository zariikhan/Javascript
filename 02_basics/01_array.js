let arr = [1, 2, 3, 4, 5, 6, 7];
let strArr = ["khan", "ali", "nawab"];
// console.log(arr[3])
// arr[3] = 40
// console.log(arr)
// console.log(strArr)
// console.log(strArr.length)
// console.log(arr.concat(strArr))

// array method

// arr.push(10)
// arr.push(1000)
// arr.pop()
// arr.pop()
// arr.unshift(12)
// arr.shift()

// console.log(arr.join())
// console.log(arr.includes(1))
// console.log(arr.indexOf(2))

// slice and splice
// console.log("A", arr);
// console.log(arr.slice(1, 4));
// console.log(arr);
// console.log("B", arr);
// console.log(arr.splice(1, 4));
// console.log("C", arr);

// part 2 //
let teachers = ["jawad", "khan", "khlaid"];
let subjects = ["maths", "science", "english"];
let salary = [2000, 4000, 6000];

// teachers.push(subjects)
// console.log(teachers[3][2])

// let combines = teachers.concat(subjects);
// console.log(combines);

// let final = combines.concat(salary)
// console.log(final)

const finalArray = [...teachers, ...subjects, ...salary];
// console.log(finalArray);

let arrays = [
  1,
  2,
  3,
  [4, 5, 6],
  7,
  8,
  9,
  [10, 11, [12, 13, 14, [15, 16, 17]]],
];
console.log(arrays.flat(Infinity));

console.log(Array.isArray([1, 2, 3]));
console.log(Array.from("zaryab khan"));
console.log(Array.of(100, 200, 300));

let a = 100;
let b = 200;
let c = 300;
console.log(Array.of(a, b, c));

let stud1 = "abc";
let stud2 = "def";
let stud3 = "ghi";
console.log(Array.of(stud1, stud2, stud3));

let professor = "fawad";
console.log(Array.from(professor));


// questions
let fruits = ["apples","banana","orange"]
