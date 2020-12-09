// Array in javascript
// complete array in javascript

const data = [
  "Mobin Arshad Khan",
  22,
  true,
  undefined,
  false,
  "lime",
  "yes",
  0,
  1,
];
// console.log(data); // printing all data in arrays
console.log(data.length); // finding lenght of array
// accessing array in javascript
console.log(data[0]); // first element
// Array, one dimensional array, multi-dimensional array

let aboutMe = [
  {
    name: "Mobin Arshad Khan",
    age: 22,
    education: "Bachelor of Technology",
    profession: "Software Engineering",
    specilization: "MERN stack",
  },
  true,
  567,
  999,
  undefined,
];
console.log(aboutMe.length);
console.log(aboutMe[0].specilization);

aboutMe[4] = "Undefined has been overide";
console.log(aboutMe);
// Array are zero based index means first elements of every array have index is 0
// add items to an  array using push() and unshift() methods
// push add at the end of array
let items = [];
items.push("Shirt");
items.push(["Chocolate", "Butter", "Bread"]);
console.log(items);
console.log(items.length);

// unshift() add the begining of array
items.unshift("Carbon x1 thinkPad");
items.unshift(["backlite keyboard", 22, true]);
console.log(items);
// removes an item in array using pop(), shift()
// pop() methods removes from the end of array
items.pop();
console.log(items);
// unshift() removes from the begining of the array
items.shift();
console.log(items);
// removes an item using splice method in between any where in array
//  remove any number of consecutive elements from anywhere in an array.
let numbers = [4, 6, 8, 10, 12, 14];
console.log(numbers.splice(0, 3));
console.log(numbers.splice(-3));
//Add Items Using splice()Passed

// copying array item using slice(startIndex, endIndex)

let fab = [0, 1, 1, 2, 3, 5, 8, 13];
console.log(fab.slice(2, 7));

// Practice DATA structure from freeCodeCamp
// one dimensional array
let simpleArray = ["one", 2, "three", true, false, undefined, null];
console.log(simpleArray.length);
// multi-dimensional array
let complexArray = [
  [
    {
      one: 1,
      two: 2,
    },
    {
      three: 3,
      four: 4,
    },
  ],
  [
    {
      a: "a",
      b: "b",
    },
    {
      c: "c",
      d: "d",
    },
  ],
];

console.log(complexArray[0][0].one);

// Access an Array's Contents Using Bracket Notation

let ourArray = ["a", "b", "c"];
let ourVariable = ourArray[0]; //a
console.log(ourVariable);
// we can also change the value of content inside the array e.g
ourArray[1] = "Not B";
console.log(ourArray);
