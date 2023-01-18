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

/*Contact Form*/
/*Form Validation*/

//Validate Name Field
function validate() {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("InputEmail");
  const subjectInput = document.getElementById("subject");
  const messageInput = document.getElementById("message");
  //check if empty
  if (
    nameInput.value == "" ||
    emailInput == "" ||
    subjectInput == "" ||
    messageInput == ""
  ) {
    alert("Field cannot be empty");
  } else if (nameInput.value.length < 6) {
    alert("Need 6 or more chars.");
  } else if (nameInput.value.length > 20) {
    alert("Only 20 Chars allowed.");
  }
}
