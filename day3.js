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
function cap(str) {
  str = str.toLowerCase();
  let firstChar = str.slice(0, 1).toUpperCase();
  let cmStr = firstChar + str.slice(1, str.length);
  return cmStr;
}
console.log(cap("mantasha"));
