// CONDITIONALS STATEMENTS IN JAVASCRIPTS
// if, else if, else, switch, ternary operator
let hours = new Date();
hours = hours.getHours();

if (hours >= 5 && hours < 12) {
  console.log("Greet them : GOOD MORNING");
} else if (hours >= 12 && hours < 18) {
  console.log("Greet them : GOOD AFTERNOON");
} else if (hours >= 18 && hours < 21) {
  console.log("Greet them : GOOD EVENING ");
} else {
  console.log("Greet them : GOOD NIGHT");
}
console.log(hours);
