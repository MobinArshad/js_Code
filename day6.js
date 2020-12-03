// Day 6 of javaScript
// Conditionals statements
// if, else if , else, switch, ternary operator

// syntax

// if (condition) {
// statement will execute
// } else if (condition) {
// statement will execute
// } else {
// this will execute if none of the above will execute
// }

// switch(expression){
//     case :
//       statement;
//       break;
//    ......

//    default :
//       statement;
//    break;
// }

// (condition) ? statement1 : statement2

const date = new Date();
let hours = date.getHours();
if (hours >= 5 && hours < 12) {
  console.log("Good Morning");
} else if (hours >= 12 && hours < 17) {
  console.log("Good Afternoon");
} else {
  console.log("Good Evening");
}
// Logical operator && AND operator, || OR operator, ! NOT operator
console.log("OR || operator");
console.log(true || false);
console.log(false || true);
console.log(true || true);
console.log(false || false);

console.log("AND && operator");
console.log(true && false);
console.log(false && true);
console.log(false && false);
console.log(true && true);

console.log("NOT ! operator");
console.log(!true);
console.log(!false);

// Function in javascript => functions are the reusable bits of code
// declaring the function
function favouriteAnimals(animal) {
  return `My favourite animal is ${animal} !`;
}

// callaing the function
console.log(favouriteAnimals("Goat"));

// built in browser function
// replace() method
let about = "I am Mobin Arshad Khan I love to write code";
let newAbout = about.replace("code", "Maths");
console.log(newAbout);

// join() methods
let best = ["I", "Love", "to", "eat", "dark", "chockolate"];
console.log(best.join(" "));

// generate random numbers
// Math.random();
let x = Math.random();
console.log(x);

// function declartion
function greetMessage(name) {
  console.log("Hello Every one I am " + name + " !");
}
// calling function
greetMessage("Mobin Arshad Khan");
greetMessage("Washim Arshad Khan");
// scope in function => Scope generally refers to the visibility of variables

function name() {
  let firstName = "Mobin Arshad"; // these all variables only be accessible within the function  outside of function it will show the error
  let lastName = "Khan";
  let fullNmame = firstName + " " + lastName;
  console.log(fullNmame);
}
name();

let age = 22; // variables are the outside of the functions even accessible within the function
function birthYear(currentYear) {
  return currentYear - age;
}

console.log(birthYear(2020));

// booleans are converted into numbers during additions
let a = true;
a += 19;
console.log(a);

// inner and outher variables
let programming = "MERN";
function chnagedSyllabus() {
  let programming = "Maths Lover";
  console.log(programming);
}
chnagedSyllabus();
console.log(programming); // outside of the function

// default parameters in function
function sayName(name = "unknown") {
  console.log("Your name is printed here : " + name);
}

sayName("Mobin Arshad Khan");

function saySomethings(smt) {
  if (smt === undefined) {
    smt = "please login again";
  }
  console.log("Your quote is printed here : " + smt);
}
saySomethings();
// Returning a values
function calculateSum(a, b) {
  return a + b;
}

let sum = calculateSum(5, 6);
console.log(sum);
// function declartion ,function expression, and arrow function

let oddNum = [3, 5, 7, 9, 11, 13, 15, 18, 21];
let multThree = oddNum.forEach((x) => {
  console.log(x * 3);
});

//Write a function called lastLetter that takes a string and returns the very last letter of that string:
//lastLetter("abcd") should return "d"
console.log("Mobin Arshad Khan".slice(-1)); // logic
function lastLetter(str) {
  return str.slice(-1);
}
console.log(lastLetter("Mobin Arshad"));

let aaa = "Mobin Arshad Khan";
console.log(aaa[aaa.length - 1]);

function lst(str) {
  return str[str.length - 1];
}

console.log(lst("coding"));

// Write a program that takes a user’s input and prints the numbers from one to the number the user entered. However, for multiples of three print Fizz instead of the number and for the multiples of five print Buzz. For numbers which are multiples of both three and five print FizzBuzz.

for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
