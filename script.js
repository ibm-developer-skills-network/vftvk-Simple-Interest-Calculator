
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}

function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
var interest = (principal * years * rate) /100;
    var year = new Date().getFullYear()+parseInt(years);

document.getElementById("result").innerHTML = "if you deposit: " + principal + '\n' + 
"at an interest rate of: " + rate + '\n' +
"You will receive an interest of " + interest + '\n' +
"At the end of " + year
    
    
}
        