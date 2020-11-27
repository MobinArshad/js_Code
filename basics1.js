//  javaScript code tutorials
// Class One ============= 1

// alert(), prompt(), and confirm() only support in browser based application not in nodeJS (server based)

////////////////////////////////////////////////////////////////////////////////////

alert("This will be alerted in browser");
let name = prompt("What is your name");
let userInput = confirm("Are you really want to leave the page");
if (userInput) {
  alert("Thanks to stay with us");
} else {
  alert("Your welcome more");
}

// DATA TYPES
// Primitive data types and non-primitive data types
// Primitive data types in javascript
// Number
// String
// boolean
// null
// undefined
// symbol
// bigInt
let num1 = 45,
  num2 = 3.4,
  num3 = -4;
console.log(num1, num2, num3);
let name = "Mobin Arshad Khan";
console.log(name);
let isHolidayToday = false;
let isWorkingToday = true;
console.log(isHolidayToday, isWorkingToday);

// typeof operator to check data types of variables
let num = 123.56;
console.log(typeof num);
console.log(typeof 123);
