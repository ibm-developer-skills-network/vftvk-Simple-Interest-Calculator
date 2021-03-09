function output(Rate) {
  document.querySelector('#Rate').value = Rate
}

function calculate() {
  var x = document.getElementById("amount").value;
  var y = document.getElementById("Rate").value;
  var z = document.getElementById("Years").value;
  var totalInterest = (x * y * z / 100);
  var currentYear = new Date().getFullYear();
  var totalYears = +currentYear + +z;

  text = "You will receive an amount of " + "</p><resultcolour>" + + totalInterest + "</resultcolour></p>" + " in the Year " + totalYears;
  result.innerHTML = text ;
} 
