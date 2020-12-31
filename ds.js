// Array in javaScript one-dimension array
let simpleArray = ["one", 2, "three", true, false, null, undefined];
console.log(simpleArray);
console.log(simpleArray.length);

// multi-Dimensional array
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
console.log(complexArray.length);

// Access array content using bracket notation
let ourArray = ["a", "b", "c"];
console.log(ourArray);
console.log(ourArray[0]);
console.log(ourArray[1]);
console.log(ourArray[2]);
//updating elements of array
ourArray[1] = "I am not b";
console.log(ourArray);
// Add Items to an Array with push() and unshift()
let twentyThree = "XXIII";
let romanNumerals = ["XXI", "XXII"];
romanNumerals.unshift("XIX", "XX");
console.log(romanNumerals);
romanNumerals.push(twentyThree);
console.log(romanNumerals);

// Remove Items from an Array with pop() and shift()

let greetings = ["whats up?", "hello", "see ya!"];
greetings.pop();
console.log(greetings);
greetings.shift();
console.log(greetings);

// Remove Items Using splice();
let array = ["today", "was", "not", "so", "great"];

array.splice(2, 2);
console.log(array);

let array2 = ["I", "am", "feeling", "really", "happy"];
let newArray = array2.splice(3, 2);
console.log(newArray);

// Add Items using splice();

const numbers = [10, 11, 12, 12, 15];
numbers.splice(3, 1, 13, 14);
console.log(numbers);

// Copy Array Items using slice();
let weatherConditions = ["rain", "snow", "sleet", "hail", "clear"];

let todayWeather = weatherConditions.slice(1, 3);

console.log(todayWeather);

// Copy an Array with the spread operator ...
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
console.log(thisArray);
console.log(thatArray);

// Combine Arrays with the spread operator

let theArray = ["sage", "rosemary", "parsley", "thyme"];

let thtArray = ["basil", "cilantro", ...theArray, "coriander"];
console.log(thtArray);

// check for the presence of an Element with indexOf()

let fruits = ["apples", "pears", "oranges", "peaches", "pears"];
console.log(fruits.indexOf("dates")); // -1
console.log(fruits.indexOf("oranges")); // 2
console.log(fruits.indexOf("pears"));

// Iterate Through All an Array's Item Using For Loops

function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

let greaterTenCon = greaterThanTen([2, 12, 8, 14, 80, 0, 1]);
console.log(greaterTenCon);
