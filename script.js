//Check for positive values
function validateAmount() {
    var principal = document.getElementById("principal").value;
    var moreThenZero = parseInt(principal) > 0;
    if (!moreThenZero) {
        alert("Enter a positive number please");
        document.getElementById("principal").focus();
    }
}

//Updates the rate value
function getSliderValue() {
    document.getElementById("rate_val").innerHTML = document.getElementById("rate").value;
}

function compute() {
//Get the values of interest 
var principal = parseFloat(document.getElementById("principal").value);
var rate = parseFloat(document.getElementById("rate").value);
var years = parseInt(document.getElementById("years").value);
var interest = principal * years * rate /100;
var yearInTheFuture = new Date().getFullYear()+parseInt(years);
   
document.getElementById("result").innerHTML = "If you deposit <mark>" + principal + "</mark>,<br/>" +
    "at an interest rate of <mark>" + rate + "%"+"</mark>,<br/>" +
    "You will receive an amount of <mark>" + interest + "</mark>,<br/> " +
    "in the year <mark>" + yearInTheFuture + "</mark>";
}
        
