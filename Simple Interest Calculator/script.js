const floatingInput = document.createElement("p");
const rateLabel = document.querySelector("#rate");
const principalInput = document.querySelector("#principal");
const ratePara = rateLabel.lastElementChild;
const rateInput = document.querySelector("#myRange");
const timeSelector = document.querySelector("#time");
const computeButton = document.querySelector("button");
const result = document.querySelector("#result");
const currentYear = new Date().getFullYear();
const para = document.createElement("p");
let principalValue = 0;
let interestRate = 1;
let timePeriodValue = 1;
let interestValue = 0;
let finalAmount = 0;
let resultText = "";

function calculateInterest() {
  interestValue = (principalValue * interestRate * timePeriodValue) / 100;
  interestValue = interestValue.toFixed(4);
  interestValue = Number(interestValue);
  console.log(interestValue);
  return interestValue;
}

principalInput.addEventListener("keyup", (e) => {
  if (e.target.value >= 0) {
    principalValue = Number(e.target.value);
    console.log(principalValue);
    para.textContent = "";
  } else {
    alert("enter a positive number");
    e.target.value = "";
  }
});
rateInput.addEventListener("change", (e) => {
  interestRate = Number(e.target.value);
  ratePara.textContent = `${interestRate}%`;
  para.textContent = "";

  console.log(interestRate);
});
timeSelector.addEventListener("click", (e) => {
  timePeriodValue = Number(e.target.value);
  console.log(timePeriodValue);
  para.textContent = "";
});
computeButton.addEventListener("click", () => {
  if (principalValue > 0) {
    calculateInterest();
    if (para.textContent == "" && principalValue >= 0) {
      resultText = `If you deposit <span id='highlight'>${principalValue},</span><br>
  at an interest of <span id='highlight'>${interestRate}%.</span><br>
  You will recieve an amount of <span id='highlight'>${interestValue},</span><br>
  in the year <span id='highlight'>${currentYear + timePeriodValue}</span>`;
      para.innerHTML = resultText;
      computeButton.parentElement.appendChild(para);
      console.log(para);
    }
  } else {
    alert("Enter a positive number");
    principalInput.value = "";
    principalInput.focus();
  }
});

        