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
// prevent object mutation
// Syntax Object.freeze(nameOfObject)
const mobin = {
  name: "Mobin Arshad Khan",
  profession: "Software Engineer",
  education: "Bachelor of Engineering",
  hobbies: "Travelling",
  age: 23,
};
console.log(mobin);
Object.freeze(mobin); // it prevent the mutation of Objects
mobin.color = "brown";
console.log(mobin);
delete mobin.name;
console.log(mobin);
// freeze the objects

function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14,
  };
  Object.freeze(MATH_CONSTANTS);
  try {
    MATH_CONSTANTS.PI = 99;
  } catch (err) {
    console.log(err);
  }
  return MATH_CONSTANTS.PI;
}

const PI1 = freezeObj();
console.log(PI1);
// Arrow function in javascript
let myFunc = function () {
  let name = "Mobin Arshad Khan";
  return name;
};

myFunc = () => {
  let name = "Mobin Arshad Khan";
  return name;
};

myFunc = () => "Mobin Arshad Khan";

console.log(myFunc());
const magic = () => new Date();

// write arrow function with parameters
// single parameters without paranthesis
const doubler = (item) => item * 2;
console.log(doubler(2));
const tripler = (x) => x * 3;

// two or more than two with parenthesis
const mult = (num1, num2) => num1 * num2;
console.log(mult(5, 6));

const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2, 3, 4, 5], [6, 7, 8, 9]));

//Set Default Parameters for Your FunctionsPassed
const greeting = (userName = "Geeker") =>
  "Welcome to this chanel Mr. " + userName + " !";
console.log(greeting());
console.log(greeting("Mobin Arshad Khan"));

//Use the Rest Parameter with Function Parameters
function howMany(...args) {
  return args;
}

console.log(howMany(1, 2, 3, 4, 5));

const sum = (...args) => {
  return args.reduce((a, b) => a + b);
};

console.log(sum(3, 5, 6, 8));
// Use the Spread Operator to Evaluate Arrays In-PlacePassed

// in ES 5

var arr = [6, 89, 3, 45];
var maximum = Math.max.apply(null, arr);
console.log(maximum);
console.log(Math.max(5, 8, 930, 388));
console.log(Math.max(...arr));

// copy all contents of arr1 into another array arr2 using spread operator
const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;
arr2 = [...arr1];
console.log(arr2);
// copying array items using slice
// slice is generally used to cut into parts
let arr3 = arr1.slice(0);
console.log(arr3);
// object destrucutring
let user2 = {
  name: "Mobin Arshad Khan",
  age: 23,
  address: "Village Rahmat Nagar",
  isMarried: false,
  color: "fair",
};
// Accessing objects by dot notation
console.log(user2);
console.log(user2.name);
console.log(user2.age);
console.log(user2.address);
console.log(user2.isMarried);
console.log(user2.color);
// Accessing objects by destructuring
const { name, age, address, color, isMarried } = user2;
console.log(name, age, address, color, isMarried);

const john = {
  name2: "John Doe",
  age2: 34,
};
// accessing objects by dot or destructuring
console.log(john.name2, john.age2);
var { name2, age2 } = john;
console.log(name2, age2);

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};

const { today, tomorrow } = HIGH_TEMPERATURES;
console.log(today, tomorrow);
//Use Destructuring Assignment to Assign Variables from ObjectsPassed

const userName = {
  name3: "john Doe",
  age3: 34,
};
const { name3: userFullName, age3: userAge } = userName;
console.log(userFullName, userAge);

// Use Destructuring Assignment to Assign Variables from Nested ObjectsPassed

const user4 = {
  johnDoe: {
    age4: 34,
    email: "johnDoe@freeCodeCamp.com",
  },
};

const {
  johnDoe: { age4: jhonDoeAge, email: jhonDoeEmail },
} = user4;
console.log(jhonDoeEmail);
console.log(jhonDoeAge);

//Use Destructuring Assignment to Assign Variables from ArraysPassed

const [a, , b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // 1, 3

//Use Destructuring Assignment with the Rest Parameter to Reassign Array ElementsPassed
let num5 = [1, 2, 3, 4, 5, 6];

const [z, y, ...arr10] = num5;
console.log(arr10); // [3, 4, 5, 6]
// Use Destructuring Assignment to Pass an Object as a Function's ParametersPassed

const profileUpdate = (profileData) => {
  const { abc, acd, lto } = profileData;
  // do something with these data
};
