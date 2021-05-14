

var slider = window.document.getElementById("rate");
var output = window.document.getElementById("ratenumber");
output.innerHTML = slider.value;

document.getElementById("compute").addEventListener("click", function() {
  var x = document.getElementById("principal").value;
  var y = document.getElementById("years").value;
  if (isNaN(x) || x < 1) {        //Principal validation
    alert('You must enter a positive number as PRINCIPAL!');
    document.getElementById("principal").focus();
  } else if (isNaN(y) || y < 1) {
    alert('You must enter a positive number as YEARS!');
    document.getElementById("years").focus();
  } else {
    compute();
  }
});

slider.oninput = function() {
  output.innerHTML = this.value;
}

function compute()
{
    var p = document.getElementById("principal").value;
    var r = document.getElementById("rate").value;
    var y = document.getElementById("years").value;
    var total = ((p*r)/100)*y; 
    printResult(p, r, y, total);
}

function printResult(prin,rat, yea, tot)
{
  var currentYear = new Date().getFullYear();
  var receiveYear = parseInt(currentYear) + parseInt(yea);
  if (isInt(tot) == false) {
    tot = tot.toFixed(2);
  }
  document.getElementById("textresults").style.visibility = "visible";
  document.getElementById("deposit").innerHTML = prin;
  document.getElementById("interestrate").innerHTML = rat +"%";
  document.getElementById("receiveamount").innerHTML = tot;
  document.getElementById("receiveyear").innerHTML = receiveYear;
}

function isInt(value) {
  if (isNaN(value)) {
    return false;
  }
  var x = parseFloat(value);
  return (x | 0) === x;
}