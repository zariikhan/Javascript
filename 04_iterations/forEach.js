// forEach

let heroes = ["thor", "spiderMan", "batMan"];

// heroes.forEach(function(value){
// console.log(value)
// })

// heroes.forEach((value)=>{
// console.log(value)
// })

// function print(value){
//     console.log(value)
// }
// heroes.forEach(print)

heroes.forEach((index, value, arr) => {
  console.log(index, value, arr);
});
