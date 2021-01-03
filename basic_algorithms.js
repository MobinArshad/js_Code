// basic js alogorithms continue

// check data is boolean or not

function checkBool(bool){
    if(typeof bool === "boolean"){
        return true;
    } else{
        return false;
    }
}

let x = checkBool(true);
console.log(x);
let y = checkBool(false);
console.log(y);

// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

function titleCase(str){
    let splitStr = str.split(" ");
    let output = "";
    for(let i=0; i<splitStr.length; i++){
        output += splitStr[i].charAt(0).toUpperCase() +splitStr[i].slice(1).toLowerCase() + " ";
    }
    return output;
}

console.log(titleCase("I'm mobin arshad khan"));
// Remove all falsy values from an array.

function bouncer(arr) {
   let newArr = [];
   for(let i=0; i< arr.length; i++){
       if(Boolean(arr[i])){
           newArr.push(arr[i]);
       }
   }
   return newArr;
  }
  
  console.log(bouncer([7, "ate", "", false, 9]));

// Where do I BelongPassed
function getIndexToIns(arr, num) {
    let index = 0;
    arr.sort((a, b)=> a-b);
    for(let i=0; i<arr.length; i++){
      if(arr[i]< num){
        index = arr.indexOf(arr[i]) + 1;
      } 
      if(arr[i]=== num){
        index = arr.indexOf(arr[i]);
      }
    }
    return index;
  }
  
  console.log(getIndexToIns([40, 60], 50));

//Mutations
function mutation(arr) {
    let first  =arr[0].toLowerCase();
    let second = arr[1].toLowerCase();
    for(let i=0; i<second.length; i++){
      if(first.indexOf(second[i]) < 0){
        return false;
      } 
    }
    return true;
 }
 
 console.log(mutation(["hello", "hey"]));
 
 //Basic Algorithm Scripting: Chunky Monkey






