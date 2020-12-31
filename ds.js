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

//We have defined a function, filteredArray, which takes arr, a nested array, and elem as arguments, and returns a new array. elem represents an element that may or may not be present on one or more of the arrays nested within arr. Modify the function, using a for loop, to return a filtered version of the passed array such that any array nested within arr containing elem has been removed.

function filteredArray(arr, elem) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) === -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

let argArray = [
  [3, 2, 3],
  [1, 6, 3],
  [3, 13, 26],
  [19, 3, 9],
];
console.log(filteredArray(argArray, 3));

// Multi- Dimensional Arrays

let nestedArray = [
  ["deep"],
  [["deeper"], ["deeper"]],
  [[["deepest"], ["deepest"]]],
  [[["deepest-est?"]]],
];
console.log(nestedArray);

// Add Key Value Pairs to JavaScript Objects
const tekkenCharacter = {
  player: "Hwoarang",
  fightingStyle: "Tae Know Doe",
  human: true,
};

// adding addtional property to objects
tekkenCharacter.origin = "South Korea";
tekkenCharacter["hair color"] = "dyed orange";

const eyes = "eye color";
tekkenCharacter[eyes] = "brown";
console.log(tekkenCharacter);
// Modify an Object Nested Within an Object
let nestedObject = {
  id: 2880269164,
  date: "December 31, 2020",
  data: {
    totalUsers: 99,
    online: 80,
    onlinStatus: {
      active: 67,
      away: 13,
      busy: 8,
    },
  },
};

// assign busy to 10
let newBusy = (nestedObject.data.onlinStatus.busy = 10);
console.log(nestedObject);

// Use the delete keyword to Remove Object Properties

const mobin = {
  name: "Mobin Arshad Khan",
  age: 23,
  hobbies: ["Making Apps", "Travellings"],
  job: "Software Engineer",
  hate: "Memorizing things",
};

delete mobin.hate;
console.log(mobin);

// check if an Object has a Property

console.log(mobin.hasOwnProperty("name"));
console.log(mobin.hasOwnProperty("dob"));
console.log(mobin.hasOwnProperty("hobbies"));
//We've created an object, users, with some users in it and a function isEveryoneHere, which we pass the users object to as an argument. Finish writing this function so that it returns true only if the users object contains all four names, Alan, Jeff, Sarah, and Ryan, as keys, and false otherwise.

let users = {
  Alan: {
    age: 27,
    online: true,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: true,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

function isEveryoneHere(obj) {
  ["Alan", "Jeff", "Sarah", "Ryan"].every((name) => obj.hasOwnProperty(name));
}

console.log(isEveryoneHere(users));

// Iterate through the Keys of an Object with a for...in Statement
const user = {
  name: "Mobin Arshad Khan",
  age: 23,
  love: "unknown",
  education: "Bachelor of Engineering",
  profession: "Software Engineering",
};

for (let prop in user) {
  console.log(prop + " " + user[prop]);
}
