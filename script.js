function compute()
{

    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    var interest = principal * years * rate/100;
    var amount = interest;

    var year = new Date().getFullYear()+parseInt(years);

    if (principal === '' || principal <= 0) {
        alert("Enter positive number");
        document.getElementById("principal").focus();
        return;
    }


    document.getElementById("result").innerHTML = "If you deposit \<mark\>" + principal + "\</mark\>\<br\>at an interest rate of \<mark\>" 
    + rate + "%\</mark\> \<br\>You will receive an amount of \<mark\>" + amount + 
    "\</mark\>, \<br\>in the year \<mark\>" + year + "\</mark\>\<br\>";

}
        
function updateRate() {

    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;

}