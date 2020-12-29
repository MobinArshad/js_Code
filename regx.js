// Regular expression in javascript
// test() method
let str = "The dog chased the cat";
let regex = /the/;
let x = regex.test(str);
console.log(x); // true

str = "freeCodeCamp";
regex = /Code/;
x = regex.test(str);
console.log(x);

str = "Hello, World";
regex = /Hello/;
x = regex.test(str);
console.log(x);

str = "Hello, my name is Kevin.";
regex = /Kevin/;
x = regex.test(str);
console.log("Kevin " + x);

//Match a Literal String with Different Possibilities alternation OR  |

str = "James has a pet cat.";
regex = /cat|dog|bird|fish/;
x = regex.test(str);
console.log(x);

// Ignore Case While MatchingPassed using -i flag

str = "freeCodeCamp";
regex = /freeCodeCamp/i;
x = regex.test(str);
console.log("fccc : " + x);

//  Extract MatchesPassed
str = "Hello, World!";
regex = /Hello/;
x = str.match(regex);
console.log(x);
console.log("Hello, World!".match(/Hello/));

//Find More Than the First Match using g flag
str = "Repeat, Repeat, Repeat";
regex = /Repeat/g;
x = str.match(regex);
console.log(x);

str = "Twinkle, twinkle, little star";
regex = /twinkle/gi;
x = str.match(regex);
console.log(x);
