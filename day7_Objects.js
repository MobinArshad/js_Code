// javaScript Objects
// object literals
const user1 = {
  firstName: "Mobin Arshad",
  lastName: "Khan",
  age: 22,
  profession: "Software Engineer",
  education: "software engineering",
};

const user2 = {
  firstName: "Mohit",
  lastName: "Mishra",
  age: 23,
  profession: "Software Engineer",
  education: "Bachelor of enginnering",
};

const user3 = {
  firstName: "Amruddin",
  lastName: "Siddiqi",
  age: 24,
  profession: "Software Enginner",
  edication: "Bachelor of enginnering",
};
// what if lots of user then we need to use function constructor
// function constructor start with capital letter e.g

// constructor function
function User(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.profession = "Software Enginnering";
  this.education = "Bacheloer Of Engineering";
}

const mobin = new User(
  "Mobin Arshad",
  "Khan",
  22,
  "Software Engineering",
  "Bachelor of Enginnering"
);

const mohit = new User(
  "Mohit",
  "Singh",
  23,
  "Software Enginnering",
  "Bachelor of Enginnering"
);

const amrudin = new User(
  "Amruddin",
  "Siddiqi",
  24,
  "Software Engineering",
  "Bacheloer of Engineering"
);

console.log(amrudin.education);
console.log(mobin);
