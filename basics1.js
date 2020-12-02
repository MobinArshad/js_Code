//  javaScript code tutorials
// Class One ============= 1

// alert(), prompt(), and confirm() only support in browser based application not in nodeJS (server based)

////////////////////////////////////////////////////////////////////////////////////

// name = prompt("What is your name");
// let userInput = confirm("Are you really want to leave the page");
// if (userInput) {
//   alert("Thanks to stay with us");
// } else {
//   alert("Your welcome more");
// }

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
let message = "Hello World";
message = 3535;
console.log(message);
console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(typeof NaN);
// String in javaScript :=> String in javaScript must be quoted in double or single quoes or template literals (backtick)

const abc = "Mobin Arshad Khan"; // double quotes string
const xyz = "I love to write code"; // we can also used single quotes
const about = `I am ${abc} ${xyz} in javaScript`; // backticks string
console.log(about);

// slice() method in javascript

let fullName = "Mobin Arshad Khan";
console.log(fullName.slice(0, 5));

// String methods and properties

const str =
  "Hello I am Mobin Arshad Khan I  like to write code and be awesome and happy in coding. coding takes time but anyway i enjoyed  it like playing games ";
// length property in string
console.log(str.length);
console.log(str.indexOf("Khan"));
console.log(str.lastIndexOf("games"));
console.log(str.search("Khan"));

let nameM = "Mobin Arshad Khan";
console.log(nameM);
console.log(nameM.slice(0, 5));
console.log(nameM.substring(0, 5));
console.log(nameM.substr(0, 5));

let content =
  "I am Mobin Arskad Khan I lover to write code learning code is fun for me";

// content = content.replace("code", "Maths");
content = content.replace(/Code/gi, "Maths");
console.log(content);

let x = "5";
console.log(x.padStart(4));
console.log(x.padEnd(4));
console.log("Hello World");
console.log("Mobin".charAt(3));
console.log("Mobin".charCodeAt(0));
// converting string into array
let mno = "I am Mobin Arshad Khan";
mno = mno.split(" ");
console.log(mno);
// converting number to string

let myNum = 102;
let stringNum = myNum.toString();
console.log(typeof stringNum);

// Comprision always give us the Boolean values
// this may be either true or false

let num4 = 5;
let num5 = 10;
console.log(num4 != num5);
