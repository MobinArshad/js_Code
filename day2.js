// javaScript variables
// variables are defined three ways in java Script
// var, let and const
// var have function scope
// let and const have block level scope
// naming of variable letter, _  (underscore), $ and number , can't start with number
let name = "Mobin Arshad Khan";
var num = 112;
const PI = 3.147;
console.log(name, num, PI);
name = "Washim Arshad Khan";
console.log(name);

// variable concatenation

let firstName = "Mobin Arshad";
let lastName = " Khan";
let fullName = firstName + " " + lastName;
console.log(fullName);

// interchanging the values of two variables;
let a = 12;
let b = 15;
console.log("Initial value of a : " + a + " Initial value of b :" + b);
let c = a;
a = b;
b = c;
console.log("Final value of a : " + a + " final value of b : " + b);

// String concatenation also be done by template literals e.g
const score = 100;
const adminName = "Mobin Arshad Khan";
const sentence = `${adminName} and i love to give my best in code  score ${score}%`;
console.log(sentence);
