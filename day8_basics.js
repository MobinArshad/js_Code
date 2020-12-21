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

// Arrays
