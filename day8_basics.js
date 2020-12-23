// day_8 basics javascript
// revision from freeCodeCamp

// comment in javascript
// this is the single line comment or inline comment

/*

  This is the multiline comment
  you can comment any things with this comment 
  this is also called block level comment


*/

// data types in javascript => it is the way through which we can represent the data
// number
// string
// boolean
// null
// undefined
// symbol
// object
// bigInt

// String Data types => either in double or single quotes
let fullName = "Mobin Arshad Khan"; // String in Double quotes

let firstName = "Mobin Arshad";
let lastName = "Khan";
// number can also be String e.g
let num = "12";
console.log(typeof num);
// Number Data Types

num = 15;
console.log(typeof num);

// variables are the container to store differnt types of data in it

// we can decleared variables using let, varor const keyword
// let are used to declared variables with block scope
// const have same scope just like let the main difference is const is immutable
// var are the functional scope

// assignment operator => it assign the values to it
num = 10;
console.log(num);

let x;
let y = 5;
console.log(x); // undefined
console.log(y + x);

// finding remainder in javascript using reminder operator using  %
console.log(10 % 4);
// concatrenating String with Plus Operator
let nameC = "My name is Mobin, " + "I concatenate.";
console.log(nameC);
// concatenating string with += operator
// += operator are used to appending the text in it
fullName += " I love to write code in javaScript .... I love to write maths";
console.log(fullName);
// Constructuring strings with a variables

let about = "I am " + firstName + " and my favourite number is " + num;
console.log(about);

// Appending Variables to Strings
let anAdjective = "awesome";
let ourStr = "freeCodeCamp is ";

ourStr += anAdjective;
console.log(ourStr);

// find the length of the string using the length property
console.log(about.length);

// Use Bracket Notation to Find the First Character in a StringPassed
let me = "Mobin Arshad Khan";
console.log(me[0]); // first character of the string
console.log(me[1]); // second character of the string
console.log(me[me.length - 1]); // last character of the string

// Store multiple values into arrays

const sandwitch = ["peanut butter", "jelly", "bread", 0.8, true, "sugar"];
console.log(sandwitch);

// Nest one Array within Another Array => Multi-Dimensional array

const items = [
  ["bread", 5],
  ["butter", "1kg"],
  ["Apple", 100],
  ["Mutton", "5kg"],
];
console.log(items);
// access array with indexes
const array = [50, 60, 70];
console.log(array); // whole array
console.log(array[0]);
let data = array[1];
console.log(data);
// modify the array with indexes
array[2] = 100;
console.log(array);
// access Multi-Dimensional Arrays with Indexes

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];
console.log(arr[3]);
console.log(arr[3][0]);
console.log(arr[3][0][1]);
// push() method an easy way to append the data at the end of the array
var arr1 = [1, 2, 3, 4];
arr1.push(5);
console.log(arr1);

var arr2 = ["Stimpson", "J", "cat"];
arr2.push(["Happy", "joy"]);
console.log(arr2);

// Manipulating arrays with pop() method
let threeArr = [1, 4, 6];
console.log(threeArr);
let oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);

// shift() are used to delete elements from the begining of the array
let ourArray = ["Stipson", "J", ["cat"]];
var removedFromArray = ourArray.shift();
console.log(removedFromArray);
console.log(ourArray);

// unshift() add items or elements at the begining of the array
ourArray.unshift("Happy");
console.log(ourArray);
// shoping list

const list = [
  ["chocolate", 50],
  ["bread", 20],
  ["milk", 2],
  ["sugar", 1],
  ["butter", 3],
];

for (let i = 0; i < list.length; i++) {
  for (let j = 0; j < list[i].length; j++) {
    if (typeof list[i][j] === "number") {
    } else {
      console.log("You have to buy" + list[i][j]);
    }
  }
}

// write a reusable javascript with function
// declaring a function
function functionName() {
  console.log("Hello World");
}

// calling a function or invoking a function
functionName();

// passing values to function with Arguments

function testFun(param1, param2) {
  console.log("My name is " + param1 + " " + param2 + " !");
}
testFun("mobin", "Arshad");

function sum(num1, num2) {
  return num1 + num2;
}

console.log(sum(5, 7));

// scope refers to the visibility of variables
// local variables take precedence over the global variable.
var someVar = "Hat";
function myFunc() {
  var someVar = "Head";
  console.log(someVar);
}
myFunc();
console.log(someVar);
// Return value from a function with return
function plushThree(num3) {
  return num3 + 3;
}
var answer = plushThree(20);
console.log(answer);

// create a function times five
function timesFive(num) {
  return num * 5;
}

let numFive = timesFive(7);
console.log(numFive);
//  add sum
var sum = 10;
function addSum(num) {
  sum += num;
  return sum;
}
console.log(addSum(6));
// creating sum function in javascript

function sumNum(num1, num2) {
  return num1 + num2;
}
console.log(sumNum(4, 8));
let processed = 0;
function processedArgs(num) {
  return (num + 3) / 5;
}
processed = processedArgs(7);
console.log(processed);
// understanding boolean values
// another data types in javaScript
// Boolean values either true value or false values

function welcomeToBooleans() {
  return true;
}
console.log(welcomeToBooleans());
// all conditional statements used boolean values to check the result either true values or valse values
// if, else if, else, switch ,ternary operator...

//Use Conditional Logic with If Statements
// if(conditio is true){
//   statement is executed
// }
function test(myCondition) {
  if (myCondition) {
    return "It is true";
  }

  return "It is false";
}

let checkText1 = test(true);
console.log(checkText1);

let checkText2 = test(false);
console.log(checkText2);
// comparision with equality operator
// == equality operator
// === strict equality operator

function equalityTest(myVal) {
  if (myVal == 10) {
    return "Equal";
  }
  return "Not Equal";
}
console.log(equalityTest(10));
// type coersion "Convert one data into another" in case of equality operator not strict equality operator

console.log(3 === 3);
console.log(3 === "3");
console.log(3 == "3");

console.log(typeof 3);
console.log(typeof "3");
console.log(typeof true);

// inequality operator !=
// strict inequality operator !==
// Comparision Operator

function testSize(num) {
  let output = "";
  if (num < 5) {
    output = "Tiny";
  } else if (num < 10) {
    output = "Small";
  } else if (num < 15) {
    output = "Medium";
  } else if (num < 20) {
    output = "Large";
  } else {
    output = "Huge";
  }
  return output;
}

let testSize1 = testSize(6);
console.log(testSize1);

// switch statements
let val = 3;
switch (val) {
  case 1:
    console.log("alpha");
    break;
  case 2:
    console.log("beta");
    break;
  case 3:
    console.log("gamma");
    break;
  case 4:
    console.log("delta");
    break;
}
let exp = "M";

switch (exp) {
  case "a":
    console.log("apple");
    break;
  case "b":
    console.log("bird");
    break;
  case "c":
    console.log("cat");
    break;
  default:
    console.log("stuff");
    break;
}

// Multiple Identical options in Switch Statements
let result1 = "";
let val1 = 3;
switch (val1) {
  case 1:
  case 2:
  case 3:
    result1 = "1, 2, or 3";
    break;
  case 4:
    result1 = "4 alone";
    break;
}

console.log(result1);
// Returning boolean values from function
// either true  values or false values
// e.g

function isEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}

console.log(isEqual(4, 4));
console.log(isEqual(4, 5));

// better way
function iequal(a, b) {
  return a === b;
}

console.log(iequal(4, 4));
console.log(iequal(4, 5));

// When a return statements is reached, the execution of the current function stops and control returns to the calling function.
//e.g

function myFun() {
  console.log("Hello");
  return "world";
  console.log("byebye");
}
console.log(myFun());
// Build JavaScript Objects =============
// Objects are everything in javascript

const cat = {
  name: "Whiskers",
  legs: 4,
  tails: 1,
  enemies: ["Water", "Dog"],
};
// accesiing javascript objects using dot and bracket notations
console.log(cat.enemies);
console.log(cat.enemies[1]);

const myObj = {
  "space Name": "Kirk",
  "More Space": "Spock",
  NoSpace: "USS Enterprise",
};
console.log(myObj["space Name"]);
console.log(myObj["More Space"]);
console.log(myObj["NoSpace"]);
// updating object properties
cat.name = "pushy";
console.log(cat);
// add new property to javascript objects
cat.speak = "Meawo Meawo";
console.log(cat);
// delete property from javascript objects
delete cat.speak;
console.log(cat);
// Testing Objects for Properties
var myObj2 = {
  top: "hat",
  bottom: "pants",
};
console.log(myObj2);
let tp = myObj2.hasOwnProperty("top");
let bt = myObj2.hasOwnProperty("bottom");
console.log(tp, bt);
// Manipulating complex objects
// array of objects
const ourMusic = [
  {
    artist: "Daft Punk",
    title: "Homework",
    release_year: 1997,
    formats: ["CD", "cassette", "LP"],
    gold: true,
  },
];

// Accessing Nested Objects
const ourStorage = {
  desk: {
    drawer: "stapler",
  },
  cabinet: {
    "top drawer": {
      folder1: "a file",
      folder2: "secrets",
    },
    "bottom drawer": "soda",
  },
};
// access secret
let sec = ourStorage.cabinet["top drawer"].folder2;
console.log(sec);
let stp = ourStorage.desk.drawer;
console.log(stp);
// Accessing Nested Arrays
// Array of objects
const ourPets = [
  {
    animalType: "cat",
    names: ["Meowzer", "Fluffy", "Kit-Cat"],
  },
  {
    animalType: "dog",
    names: ["Spot", "Bowser", "Frankie"],
  },
];
// accessing Fluffy
let fly = ourPets[0].names[1];
console.log(fly);
// accessing Spot
let spt = ourPets[1].names[0];
console.log(spt);
// Iterate with javascript While Loops
// while loop
let arr3 = [];
let i = 0;
while (i <= 5) {
  arr3.push(i);
  i++;
}
console.log(arr3);
// storing values from 5 to 0
let arr4 = [];
let num4 = 5;
while (num4 >= 0) {
  arr4.push(num4);
  num4--;
}
console.log(arr4);
// for loop in javascript
let arr5 = [];
for (let i = 0; i <= 5; i++) {
  arr5.push(i);
}
console.log(arr5);
// Adding odd numbers in array from 1 to 9 using for loop
let arr6 = [];
for (let i = 1; i <= 9; i += 2) {
  arr6.push(i);
}
// adding even numbers from 2 to 8
let arr7 = [];
for (let i = 2; i <= 8; i += 2) {
  arr7.push(i);
}
console.log(arr6);
console.log(arr7);
// count backwards with for loops
let arr8 = [];
for (let i = 10; i >= 0; i--) {
  arr8.push(i);
}
console.log(arr8);
// iterate through an array with the for loop
let arr9 = [10, 9, 8, 7, 6];
for (let i = 0; i < arr9.length; i++) {
  console.log(arr9[i]);
}
// find the total value of the array
let total = 0;
for (let i = 0; i < arr9.length; i++) {
  total += arr9[i];
}
console.log(total);
// Nesting For Loops
// Multi-Dimensional arrays
let arr10 = [
  [1, 2],
  [3, 4],
  [5, 6],
];
for (let i = 0; i < arr10.length; i++) {
  for (let j = 0; j < arr10[i].length; j++) {
    console.log(arr10[i][j]);
  }
}
// Multiplay all items in an array

let arr11 = [
  [1, 2],
  [3, 4],
  [5, 6],
];
let product = 1;
for (let i = 0; i < arr11.length; i++) {
  for (let j = 0; j < arr11[i].length; j++) {
    product *= arr11[i][j];
  }
}
console.log(product);
// do while loop
// it will first do , then spcified the condition to check
let arr12 = [];
let k = 0;
do {
  arr12.push(k);
  k++;
} while (k < 10);
console.log(arr12);
// Replace loops using recursion
// recursion is the function which call again and again itself
// Multiplying an array with n terms
function multiply(arr, n) {
  if (n < 0) {
    return 1;
  } else {
    return arr[n - 1] * multiply(arr, n - 1);
  }
}
// generate random number with javascript
// Math.random() 0(include)-1(not-include);
let randomNumber = Math.random();
console.log(randomNumber);
// Math.floor();
// Math.ceil();
// Math.round();
// parseInt();

// Ternary operator
// condition ? expression-if-true : expression-if-false
function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater";
}
console.log(findGreater(3, 5));
// check number is positive negative or zero using ternary operator
function checkNumber(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}
console.log(checkNumber(-4));
