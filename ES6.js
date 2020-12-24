// ES 6 Modules
// Arrow function
// classes
// Modules
// Promises
// Generators
// let and const
// Differences Between the var and let   KeywordsPassed

//One of the biggest problems with declaring variables with the var keyword is that you can overwrite variable declarations without an error.
// e.g
var names = "Mobin Arshad Khan";
var names = "Washim Arshad Khan";
console.log(names);

//let user = "Khan"; // Throw err to console
let user = "xyz";
console.log(user);

// use strict
let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";
}
catTalk();

//Compare Scopes of the var and let KeywordsPassed
// simply scope means visibility of varaibles
// var is function scobe
// let block scope

let numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i); // 3

let ourArray = [];
for (let j = 0; j < 3; j++) {
  ourArray.push(j);
}
console.log(ourArray);
//console.log(j); // error throw j is not defined

// Declare a Read-Only Variables with the const Keyword
// once a varaible is assigned with const, it cannot be reassigned
const PI = 3.14;
//PI = 3.143455 // return error
console.log(PI);

// Mutate an Array Declared with constPassed
const s = [5, 6, 7];
//s = [1, 2, 3]; // trow an error
s[0] = 1;
s[1] = 2;
s[2] = 3;
console.log(s);
