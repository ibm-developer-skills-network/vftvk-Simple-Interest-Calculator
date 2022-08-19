const { updateArrayTypeNode } = require("typescript");

function compute()
{
    p = document.getElementById("principal").value;
// MAC - Compute button and logic
var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;
var year = new Date().getFullYear()+parseInt(years);
var interest = principal * years * rate /100;
var result = document.getElementById("result");

// If principal is zero or negative send an alert
    if (principal <= 0) {
    alert("Enter a positive number");
    window.onload = function() {
        principal = document.getElementById("principal").focus(); // Focus in principal when return
    }
    }    
    else {
    result.innerHTML = 
    "<br/> If you deposit <mark>" + principal  + 
    "</mark>,<br/> at an interest rate of <mark>" + rate + "%. " + 
    "</mark><br/> You will \n receive an amount of <mark>" + interest + 
    "</mark>,<br/> in the year <mark>" + year ; 
} 
}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
