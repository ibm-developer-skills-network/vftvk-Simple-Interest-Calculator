function compute() {
  // variable called "principal" and assigning it the value of the input element having id of "principal"
  let principal = document.getElementById("principal").value;

  // variable called "rate" and assigning it the value of the input element having id of "rate"
  let rate = document.getElementById("rate").value;

  // variable called "years" and assigning it the value of the input element having id of "years"
  let years = document.getElementById("years").value;

  // variable called "interest" and assigning it the value of principal * years * rate / 100
  let interest = principal * years * rate / 100

  // Convert number of year into actual year in future (ie, from now on) by using Date() constructor
  let futureYearFromNow = new Date();
  futureYearFromNow.setFullYear(futureYearFromNow.getFullYear() + Number(years));

  // Get the reference to the element named "result" and show output of interest
  document.getElementById("result").innerHTML = `<b>${interest}</b> to be paid by year ${futureYearFromNow.getFullYear()}`;

}

// Function that reads value of range slider and shows the value in <span id="rangeOutput"> 
function rangeSliderVal(e) {
  e.preventDefault();
  // Get live (current) value of range slider 
  let rangeSliderValue = e.target.value;

  // Display the above read value into <span id="rangeOutput">  element
  document.getElementById("rangeOutput").innerHTML = `${rangeSliderValue}`;
}

// linking the function rangeSliderVal() with an "onchange" event on range
// So, function rangeSliderVal() will run every time the value of slider is changed (ie, onchange event happens on range element)
document.getElementById("slider").onchange = rangeSliderVal;
