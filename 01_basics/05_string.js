let fullName = "khan";
let address = "ouch";
let age = 34;
let anotherString = "               jawad            ";
let sentence = "hardwork is the key of success";
console.log(fullName);

console.log("my name is", fullName, "and i am", age, "old");
console.log(`my name is ${fullName} and i am ${age} old `);

console.log(fullName.length);
console.log(fullName.charAt(0));
console.log(fullName.charAt(1));
console.log(fullName.indexOf("n"));
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(fullName.concat(address));
console.log(fullName.includes("h"));
console.log(fullName.replace("n", "r"));
console.log(fullName.slice(0, 2));
console.log(sentence.split(",", 4));
console.log(sentence.substring(1, 3));
console.log(fullName.substring(-4, 3));
console.log(fullName.slice(-4, 2));
console.log(fullName.endsWith("n"));
console.log(anotherString);
console.log(anotherString.length);
console.log(anotherString.trim().length);

let str = "JavaScript";
console.log(str.length);

let a = "abc";
let b = "ABC";

console.log(a.toLowerCase() === b.toLowerCase());

let text = "JavaScript";
console.log(text.indexOf("Script"));

let str1 = "hellohello";
console.log(str.lastIndexOf("hello"));

let str2 = "apple,banana,orange";
console.log(str2.split(","));
// ["apple", "banana", "orange"]

let str4 = "ha";
console.log(str4.repeat(10));

let str5 = "JavaScript";
console.log(str5.startsWith("Java"));
console.log(str5.endsWith("Script"));

let num = "7";
console.log(num.padStart(3, "0"));
console.log(num.padStart(3, "7"));
console.log(num.padEnd(5, "1"));

let str6 = "apple,banana,orange";
console.log(str6.split(",")[2].toUpperCase());
