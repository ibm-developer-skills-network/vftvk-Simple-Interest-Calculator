var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;
var interest = principal * years * rate / 100;
var year = new Date().getFullYear() + parseInt(years);

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}

updateRate();

function compute() {
    let principal = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;
    let interest = principal * years * rate / 100;
    let year = new Date().getFullYear() + parseInt(years);
    let message = "If you deposit "+ principal+ ",\<br\>at an interest rate of "+ rate + " %\<br\>You will receive an amount of "+ interest+ ",\<br\>in the year "+ year+ "\<br\>";
    document.getElementById("result").innerHTML = message;

    //validation of principal input box
    //Check if principal field it is <=0
    if (principal <= 0) {
        alert("Enter a positive number");
        principal.focus();
        return false;
    }

    //If all is well return true.
    return true;
    
}
compute()
  