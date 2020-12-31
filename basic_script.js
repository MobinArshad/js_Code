//  Basic Algorith and Script => ==== freeCodeCamp
//celcius to foreignheit

function celciusToF(celcius) {
  return ((9 / 5) * celcius + 32).toFixed(2);
}
console.log(celciusToF(37));

//Reverse a StringPassed

function reverseStr(str) {
  let output = "";
  for (let i = str.length - 1; i >= 0; i--) {
    output += str[i];
  }
  return output;
}
console.log(reverseStr("mobin"));

// 2nd method
function reverseStrOther(str) {
  return str.split("").reverse().join("");
}

console.log(reverseStrOther("mobin arshad khan"));
//Factorialize a Number

function fact(num) {
  let output = 1;
  if (num === 0 || num === 1) {
    output = 1;
  } else {
    for (let i = 2; i <= num; i++) {
      output *= i;
    }
  }
  return output;
}

console.log(fact(0));
console.log(fact(1));
console.log(fact(2));
console.log(fact(3));
console.log(fact(4));
console.log(fact(5));

// 2nd Method to find factorial using recursion
console.log("Factorial by using recursive function");

function fact2(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return fact2(num - 1) * num;
  }
}

console.log(fact2(0));
console.log(fact2(1));
console.log(fact2(2));
console.log(fact2(3));
console.log(fact2(4));
console.log(fact2(5));

// Find the Longest Word in a StringPassed

function longestWord(str) {
  let splitArr = str.split(" ");
  let longest = 0;
  for (let i = 0; i < splitArr.length; i++) {
    if (splitArr[i].length > longest) {
      longest = splitArr[i].length;
    }
  }
  return longest;
}

console.log("Longest word in String is : " + longestWord("Love to write code"));

// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

function largestOfFour(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let largest = arr[i][0];

    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > largest) {
        largest = arr[i][j];
      }
    }
    newArr[i] = largest;
  }
  return newArr;
}

let m = largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);

console.log(m);
