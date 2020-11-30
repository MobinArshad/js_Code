// Fourth day of javaScript
// random Number generator

let randomNumber = Math.round(Math.random() * 100);

// love calculator just for fun
let bName = "Mobin Arshad Khan";
let gName = "xyz";
console.log(
  `Mr ${bName} and your love is ${gName} and your chance of meeting of love is ${randomNumber}%`
);

// control statements if else if else and switch

if (randomNumber >= 75) {
  console.log(
    "You love your love most and your love score is " + randomNumber + "%"
  );
} else {
  console.log(
    "You may love more than this... your love score is " + randomNumber + "%"
  );
}
// calculating % and giving the grade to it
const sbjMarks = {
  subjects: ["Maths", "English", "Science", "Programming", "Designing"],
  marks: [100, 85, 95, 90, 70],
};

let sum = 0;
for (let i = 0; i < 5; i++) {
  sum += sbjMarks.marks[i];
  console.log(sbjMarks.subjects[i] + " " + sbjMarks.marks[i]);
}
let percentage = sum / 5;
console.log(sum);
console.log("Your Percentage is " + percentage + "%");

function bmiCalculator(weight, height) {
  let bmi = weight / Math.pow(height, 2);
  let result = "";
  if (bmi < 18.5) {
    result = "Your BMI is " + bmi + ", so you are underweight.";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    result = "Your BMI is " + bmi + ", so you have a normal weight.";
  } else {
    result = "Your BMI is " + bmi + ", so you are overweight.";
  }
  return result;
}

console.log(bmiCalculator(65, 1.8));

// calculating leap year challanges
// leap year
function leapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return "leap year";
      } else {
        return "not leap year";
      }
    } else {
      return "Leap Year";
    }
  } else {
    return "Not Leap Year";
  }
}
console.log(leapYear(3000));
// working with javascript arrays
// greeting friends in party
const friends = ["Mobin Arshad", "Aman Alam", "Mohit", "Arif", "Washim"];
for (let i = 0; i < friends.length; i++) {
  console.log("Hello " + friends[i] + " welcome to party !!");
}

const fruits = ["Apple", "Orange", "Banana", "Black Berries"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits.includes("Banana"));

const programming = ["python", "js", "java", "dart", "typeScript", "mongoDB"];
const yourChoice = "php";
const choice = programming.includes(yourChoice);
if (choice) {
  console.log("Your choice matched");
} else {
  console.log("Your choice does not matched");
}

/*
  Write a program that prints the number from 1 to 100. But for multiples of three print   "Fizz" instead of number and for the multiples of five print "Buzz". For the Numbers which are multiples of both three and five print "FizzBuzz"

*/
for (let i = 1; i <= 100; i++) {
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

// push() and pop() methods in array
let animals = [
  "Lion",
  "Goat",
  "Cow",
  "Buffalow",
  "Tiger",
  "Monkey",
  "Elephant",
];
console.log(animals);
let x = animals.pop(); // Elephant
console.log(x);
console.log(animals);
let y = animals.push("Panther");
console.log(y);
console.log(animals);

// creating function and add new numbers to array as increasing order

const num = [];
let n = 1;
function addNumbers() {
  if (n % 3 === 0 && n % 5 === 0) {
    num.push("FizzBuzz");
  } else if (n % 3 === 0) {
    num.push("Fizz");
  } else if (n % 5 === 0) {
    num.push("Buzz");
  } else {
    num.push(n);
  }
  console.log(num);
  n = n + 1;
}
addNumbers();
addNumbers();
addNumbers();
addNumbers();

// paying bills to hotels by random number with the help of random friends
const names = [
  "Mobin Arhsad Khan",
  "Mohit Singh",
  "Aman Alam",
  "Nadim",
  "Arif Raja",
  "Shajid",
];

function payBills(name) {
  let randomIndex = Math.floor(Math.random() * name.length);
  return name[randomIndex] + " will pay bills for today";
}
console.log(payBills(names));

// Loops in javaScript for loop, while loop and do while loop
// printing from 1 to 10 in each of loop
// for loop
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
// while loop
let m = 1;
while (m <= 10) {
  console.log(m);
  m++;
}
// do while loop
let nu = 1;
do {
  console.log("do while loop count " + nu);
  nu++;
} while (nu <= 10);
// love languages

// let luv = 100;
// while (luv >= 0) {
//   console.log("I love  " + luv + " times more you more and more");
//   console.log("You will be " + luv - 1 + "times  in my moon ");
//   luv--;
// }

// Fibonacci numbers
// recursion :=- the function which calls again and again itself is called recursion
function fib(n) {
  if (n < 0) {
    return "Incorrect numbers";
  } else {
    if (n == 0) {
      return 0;
    } else if (n == 1) {
      return 1;
    } else {
      return fib(n - 1) + fib(n - 2);
    }
  }
}

console.log(fib(8));
