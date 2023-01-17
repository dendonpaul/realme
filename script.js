/** Circle effect on homepage with button click**/
let circle = document.getElementById("circle");

let btnUp = document.getElementById("btnUp");
let btnDown = document.getElementById("btnDown");

let rotateValue = circle.style.transform;
console.log(rotateValue);
let rotateSum;

function upClick() {
  rotateSum = rotateValue + "rotate(-90deg)";
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
}

function downClick() {
  rotateSum = rotateValue + "rotate(90deg)";
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
}
