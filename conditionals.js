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

// let day = [
//   "sunday",
//   "monday",
//   "tuesday",
//   "wednesday",
//   "thursday",
//   "friday",
//   "saturday",
// ];

let randomIndex = Math.floor(Math.random() * day.length);
switch (randomIndex) {
  case 0:
    console.log("Sunday Occurs");
    break;
  case 1:
    console.log("Monday Occurs");
    break;
  case 2:
    console.log("Tuesday Occurs");
    break;
  case 3:
    console.log("Wednesday Occurs");
    break;
  case 4:
    console.log("Thursday Occurs");
    break;
  case 5:
    console.log("Friday Occurs");
    break;
  case 6:
    console.log("Saturday Occurs");
    break;
}
