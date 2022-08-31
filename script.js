function compute()
var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;
var interest = principal * years * rate /100;
var year = new Date().getFullYear()+parseInt(years);
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
function onchange(updateRate);
{
}

function compute()
{
    document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of <mark>"+rate+"%\<br\></mark>You will receive an amount of <mark> "+amount+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>"
}
if (principal < 1){
    alert("Enter a positive number");
        principal.focus();
    
}
