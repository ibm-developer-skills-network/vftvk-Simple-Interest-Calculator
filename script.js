function compute() {
  var principal = document.getElementById("principal").value;
  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;
  var interest = (principal * years * rate) / 100;

  var futureless = parseInt(years) + 2020;
  var result = document.getElementById("result");

  result.innerHTML =
    "If you deposit <span class='highlight'>" +
    principal +
    "</span> ,<br> at an interest rate of <span class='highlight'>" +
    rate +
    "</span> <br> You will receive an amount of <span class='highlight'>" +
    interest +
    "</span>, <br> in the year <span class='highlight'>" +
    futureless +
    "</span>";

  var principal = document.getElementById("principal").value;
  if (principal <= 0) {
    alert("Enter a positive number");
    principal.focus();
    return false;
  }
}

function setSliderLabel() {
  var rate = document.getElementById("rate").value;
  document.getElementById("rate_span").innerHTML = rate + "%";
}
