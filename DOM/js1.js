// Three ways to add javascript in html
//   inline
//   internal
//   external

// alert("DOM is connected");

// function changeColor() {
//   document.body.style.backgroundColor = "red";
// }
// document.querySelectorAll();
// document.getElementById();
// document.getElementsByClassName();
// document.getElementsByTagName();
// const h1 = document.querySelector("h1");

// h1.innerHTML = "Mobin Arshad Khan";
// h1.textContent = "Love to write code";
// h1.innerText = "MERN Stacker";

// const title = document.querySelector("title");

// title.innerHTML = "DOM increased";
let button = document.getElementById("button");
let check = document.getElementById("check");
if (!check.checked) {
  button.onclick = function () {
    check.checked = true;
  };
}
