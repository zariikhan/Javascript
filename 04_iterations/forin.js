// for in

let myObj = {
  js: "javaScript",
  cpp: "C++",
  py: "python",
};

for (const key in myObj) {
  console.log(`fullform of ${key} is ${myObj[key]}`);
}

// const map = new Map();
// map.set("in", "india");
// map.set("usa", "united state of america");
// map.set("uk", "united kingdom");
// // console.log(map)
// for (const key in map) {
//     console.log(key)
// }

let str = "hello";
for (const char in str) {
  console.log(`index ${char} => ${str[char]}`);
}

let arr = [1, 2, 3, 4, 5];
for (const key in arr) {
  console.log(arr[key]);
}


