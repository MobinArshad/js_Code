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
// Match Anything with wildcard Period (.)
// wild card also called dot or period

str = "I'll hum a song";
str2 = "Bear hug";
regex = /hu./;
console.log(regex.test(str));
console.log(regex.test(str2));

str = "Let's have fun with regular expressions!";
regex = /.un/;
x = regex.test(str);
console.log("Wild Card  : " + x);
//Match Single Character with Multiple Possibilities

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
console.log(bigStr.match(bgRegex));
console.log(bagStr.match(bgRegex));
console.log(bugStr.match(bgRegex));
console.log(bogStr.match(bgRegex));
// Match Letters of the Alphabet

let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let regex1 = /[a-e]at/;
console.log(catStr.match(regex1));
console.log(batStr.match(regex1));
console.log(matStr.match(regex1));

// Match Numbers and Letters of the Alphabet
let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/gi;
console.log(jennyStr.match(myRegex));

//Match Single Characters Not SpecifiedPassed
// negated character set.
// caret ^
// e.g /[^aeiou]/gi => Matches all the character that are not vowels

//Create a single regex that matches all characters that are not a number or a vowel. Remember to include the appropriate flags in the regex.
let quoteSample = "3 blind mice.";
let rgx = /[^aeiou0-9]/gi;
console.log(quoteSample.match(rgx));

//Match Characters that Occur One or More TimesPassed

// You want to find matches when the letter s occurs one or more times in "Mississippi". Write a regex that uses the + sign.

let difficultSpelling = "Mississippi";
let rgx1 = /s+/gi;
console.log(difficultSpelling.match(rgx1));

//Match Characters that Occur Zero or More TimesPassed => *
let soccerWord = "goooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;

console.log(soccerWord.match(goRegex));
console.log(gPhrase.match(goRegex));
console.log(oPhrase.match(goRegex));

//Find Characters with Lazy Matching

//Fix the regex /<.*>/ to return the HTML tag <h1> and not the text "<h1>Winter is coming</h1>". Remember the wildcard . in a regular expression matches any character.

let text = "<h1>Winter is coming</h1>";
let rgX2 = /<.*?>/;
console.log(text.match(rgX2));
//Match Beginning String Patterns

let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
console.log(firstRegex.test(firstString));
let notFirst = "You cant'n find Ricky now.";
console.log(firstRegex.test(notFirst));
// Match Ending String Patterns $

let theEnding = "This is a never ending story";
let storyRegex = /story$/;
console.log(storyRegex.test(theEnding));
//
let noEnding = "Sometimes a story will have to end";
console.log(storyRegex.test(noEnding));
//Match All Letters and NumbersPassed

// alphabet \w ===== [A-Za-z0-9_]
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;

//Match Everything But Letters and NumbersPassed
// /[^A-Za-z0-9_]/ ===== \W

// Match all Numbers
// [0-9] ==== \d

// Match all Non-Numbers
// [^0-9] ==== \D

// Match white space (space b/w letters)
// \s

// Match Non-Whitespace Characters
// \S
