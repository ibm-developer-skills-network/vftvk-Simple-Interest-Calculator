var minval=1
var maxval=10
var step_val=0.25
var default_val=10.25

function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    var interest = principal * years * rate /100;

    var year = new Date().getFullYear()+parseInt(years);
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
        
