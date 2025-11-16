// #Variables
// There are three types of variables in js. 

// 1) var 
// Function-scoped (NOT global-scoped unless declared outside a function).
// Can be redeclared.
// Can be updated.
// Gets hoisted (but initialized with undefined).

// 2) let
// Block-scoped.
// Can be updated.
// Cannot be redeclared in the same scope.
// Hoisted but not initialized.

// 3) const
// Block-scoped.
// Cannot be redeclared.
// Cannot be reassigned.


let name = "zaryab khan";
var number = 123456789;
const email = "zaryab@1234545667@gmail.com";

country = "pakistan";

console.table([name, number, email, country]);

// Create three variables using var, let, and const.
// Then console.log all three values in one line.

let district = "dir lower";
var tehsil = "adenzai";
const postalCode = 1234;
console.log(district,tehsil,postalCode)

// Write code that shows the difference between var (function scope) and let (block scope).
if (true) {
    var rollNo = 23;
}
console.log(rollNo)

if (true) {
    let fullName = "jawad";
}
console.log(fullName)