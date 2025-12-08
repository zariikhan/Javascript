let myDate = new Date();
console.log(myDate)
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toString())

// let createdDate = new Date('2025/01/03')
// let createdDate = new Date("02/10/2029/12:00:50");
let createdDate = new Date(2025, 0, 23);
// console.log(createdDate.toLocaleDateString())
// console.log(createdDate.toLocaleDateString());
// console.log(createdDate.toLocaleString());

// *************** time *****************
// let myTime = Date.now();
// console.log(myTime);
// console.log(createdDate.getTime())
// console.log(Math.floor(Date.now()/1000))


let date  = new Date()
console.log(date.getMonth())
console.log(date.getDate())
console.log(date.getDay())
console.log(date.getFullYear())
console.log(date.getHours())

// let d = new Date("2024-12-31");
// console.log(d.getDay());

let today = new Date("2025-07-15");
console.log(today.getHours());

let d = new Date("2025-07-05T15:30:00");
console.log(d.getHours());
console.log(d.getMinutes());
