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
