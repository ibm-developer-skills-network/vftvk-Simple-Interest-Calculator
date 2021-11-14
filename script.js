//"use strict";

function Cal () {

  var a = document.getElementById("Amount").value;
  var b = document.getElementById("Irate").value;
  var c = parseInt(document.getElementById("Years").value);

if(isNaN(a)) {return alert("Please input number only");}

  let result = (a*b*c)/100;
  let futureyear = 2020+c;

    document.getElementById("resultAmount").innerHTML = "If you deposit " + a + ",";
    document.getElementById("resultIrate").innerHTML = "At an interest rate of " + b + "%.";
    document.getElementById("resultAnswer").innerHTML = "You will receive an amount of " + result + ",";
    document.getElementById("resultYears").innerHTML = "in the year " + futureyear + ".";

  }

var rangeslider = document.getElementById("Irate");
var output = document.getElementById("demo");
output.innerHTML = rangeslider.value + "%";

rangeslider.oninput = function() {
  output.innerHTML = this.value + "%";
}
