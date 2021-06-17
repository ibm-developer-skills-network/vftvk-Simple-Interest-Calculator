function compute()
{
    var principal = parseFloat(document.getElementById("principal").value);
    var amount = principal.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    var rate = document.getElementById("rate").value;
    var ratenum = document.getElementById("ratenum").innerHTML;
    var years = parseInt(document.getElementById("years").value);
    var curyear = new Date().getFullYear();

    var Html = "";
    var result = document.getElementById("result");


    var calculateInterest = function (total, years, ratePercent, roundToPlaces) {
        var interest = (ratePercent/100);
        var interestamount = (total * interest * years).toFixed(roundToPlaces);
        return parseInt(interestamount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }
    
    var total = calculateInterest(principal,years,rate,2);


    if(principal > 0){
        Html = "If you deposit " + amount +
                "<br> at an interest rate of " + ratenum +
                ",<br>you will receive an amount of " + total +
                "<br>in the year " + (curyear+years) + ".";
    } else {
        alert("Amount is required.");
    }

    result.innerHTML = Html;
    
}

//Slider
var slider = document.getElementById("rate");
var output = document.getElementById("ratenum");

output.innerHTML = parseFloat(slider.value).toFixed(1) + "%"; 

slider.oninput = function() {
  output.innerHTML = parseFloat(this.value).toFixed(1) + "%";
}
        