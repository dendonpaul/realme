/** Circle effect on homepage with button click**/
const url = window.location.href;
const lastSegment = url.split("/").pop();

if (lastSegment === "index.html") {
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
} else if (lastSegment === "contact.html") {
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
      emailInput.value == "" ||
      subjectInput.value == "" ||
      messageInput.value == ""
    ) {
      alert("Field cannot be empty");
      //check if name field has more that 6 chars
    } else if (nameInput.value.length < 6) {
      alert("Need 6 or more chars.");
      //check if name field has 20 or less chars
    } else if (nameInput.value.length > 20) {
      alert("Only 20 Chars allowed.");
      //success alert if validation is successful
    } else {
      alert("Form Validated Successfully.");
    }
  }
} else if (lastSegment == "emi.html") {
  /*EMI Calculator script*/
  let loanAmount = document.getElementById("loanamount");
  let interestRate = document.getElementById("loaninterest");
  let loanDuration = document.getElementById("loantenure");
  let calculate = document.getElementById("submit");

  // run calculate function on clicking submit button
  calculate.addEventListener("click", (e) => {
    e.preventDefault();
    if (loanAmount.value == "" || interestRate == "" || loanDuration == "") {
    } else {
      calculateEmi();
    }
  });

  //Function to calculate EMI
  const calculateEmi = () => {
    let duration = 0;
    //convert yearly interest to monthly
    let r = parseFloat(interestRate.value) / 12 / 100;
    let p = loanAmount.value;
    let n = loanDuration.value;

    let EMI = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    let totalInterest = EMI * n - p;
    let totalPayment = totalInterest + parseFloat(p);

    document.getElementById("emi-result").innerText = "Rs" + Math.round(EMI);

    document.getElementById("total-result").innerText =
      "Rs" + Math.round(totalPayment);
  };
} else if (lastSegment == "cart.html") {
  //Cart total calculation
  let quantity = document.getElementById("qty");
  let totalValue = document.getElementById("total-value");
  let price = document.getElementById("price");

  quantity.addEventListener("change", () => {
    calculateTotal();
  });

  const calculateTotal = () => {
    totalValue.innerText = parseInt(quantity.value) * parseInt(price.innerText);
    if (quantity.value == 10) {
      alert("Max 10 Qty allowed");
    }
  };
}
