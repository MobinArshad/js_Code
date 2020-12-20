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
