// Day 3 javaScript
// String and its propeerty and method
let name = "Mobin Arshad Khan";
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
let age = 23;
let education = "B-Tech";
let profession = "Software Engineer";

let firstName = "Mobin Arshad";
let lastName = "Khan";
let fullName = firstName + " " + lastName;
console.log(fullName);
let sentence = `I am ${name}, a ${age} old i have done ${education} in ${profession}`;
console.log(sentence);

let tweet =
  "Hello I am Mobin Arshad Khan and i like to write code faster and faster";
let num = tweet.length;
let totalCharacter = 30;
if (num <= 30 && num > 0) {
  console.log(
    `Your tweet is confirmed : ${tweet} \n which is ${num} character and have left ${
      totalCharacter - num
    } !`
  );
} else {
  if (num <= 0 || num > 30) {
    console.log(
      "Your tweet length is invalid it should be in between 0 and 30 : you have " +
        num +
        " length character which is invalid"
    );
  }
}

// remove extra character from message or tweet
let msg =
  "I like to write something beautifull awesome with code please help me to do it right know";

let rMsg = msg.slice(0, 50) + ".... !";
console.log(rMsg);
// first letter of word is capitalized
// split the word into two parts first letter and rest of worlds using slice method and then concatenate them

function cap(str) {
  str = str.toLowerCase();
  let firstChar = str.slice(0, 1).toUpperCase();
  let cmStr = firstChar + str.slice(1, str.length);
  return cmStr;
}
console.log(cap("mobin"));

// data types Number
// mathematical operator + , -, *, / , %, ++, --
console.log(typeof 123);
// convertor human age to dog age
// formula humanAge = (dogAge-2) * 4 + 21;
function dogToHuman(ageOfDog) {
  let humanAge = (ageOfDog - 2) * 4 + 21;
  return humanAge;
}
console.log(dogToHuman(6));
// increment and decrement e.g i++ , i--
// pre increment and pre decrement and post increment and post decrement

let x;
x = x + 1; // x++
x = x - 1; // x--
x += 1; // x= x + 1
x -= 1; // x = x-1

// let a = 5;
// console.log(a++); // 5 post increment
// console.log(++a); // 6
// console.log(a--); // 5 post decrement
// console.log(--a); // 4 pre increment

// function :=> reusable bits of code that we can used again and again when we need function defined once used again and again

// function expression , arrow function
const sayName = (name) =>
  `Your name is ${name} i like you on my code tutorials`;
console.log(sayName("Mobin Arshad Khan"));
// function declartion
function greeting(name) {
  let about =
    "Welcome to my tutorials " +
    name +
    " wannaa learn to developed game engine like M2.AK";
  return about;
}
console.log(greeting("Mobin Arshad Khan"));

// get milk function

const getMilk = (bottels) => {
  const cost = bottels * 55;
  return `The cost of ${bottels} bottels Milk is ${cost}`;
};
console.log(getMilk(5));
// BMI Calculator

function calCulateBMI(w, h) {
  let bmi = w / Math.pow(h, 2); //bmi = w/ h**2
  return bmi;
}
console.log(calCulateBMI(65, 1.8));
// Math.pow(2, 3) 2*2*2
let z = Math.pow(2, 3);
console.log(z);
let y = 2 ** 3;
console.log(y);
