var slider = window.document.getElementById("rate");
var output = window.document.getElementById("ratenumber");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

function compute()
{
    var p = document.getElementById("principal").value;
    var r = document.getElementById("rate").value;
    var y = document.getElementById("years").value;
    var total = ((p*r)/100)*5; 
    printResult(p, r, y, total);
}

function printResult(prin,rat, yea, tot)
{
  var currentYear = new Date().getFullYear();
  var receiveYear = parseInt(currentYear) + parseInt(yea);
  document.getElementById("textresults").style.visibility = "visible";
  document.getElementById("deposit").innerHTML = prin;
  document.getElementById("interestrate").innerHTML = rat +"%";
  document.getElementById("receiveamount").innerHTML = tot;
  document.getElementById("receiveyear").innerHTML = receiveYear;
}

