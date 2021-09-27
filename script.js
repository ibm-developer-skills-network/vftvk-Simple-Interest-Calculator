function compute() {
  // variable called "principal" and assigning it the value of the input element having id of "principal"
  var principal = document.getElementById("principal").value;

  // variable called "rate" and assigning it the value of the input element having id of "rate"
  var rate = document.getElementById("rate").value;

  // variable called "years" and assigning it the value of the input element having id of "years"
  var years = document.getElementById("years").value;

  // variable called "interest" and assigning it the value of principal * years * rate / 100
  var interest = principal * years * rate / 100;

  // Convert number of year into actual year in future (ie, from now on) by using Date() constructor
  var year = new Date().getFullYear()+parseInt(years);

}

// Function that reads value of range slider and shows the value in <span id="rangeOutput"> 
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("slider").onchange = rateval;
};
