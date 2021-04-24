function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * rate * years/100;
    years = 2021 + parseInt(years);
    document.getElementById("result").innerHTML="If you deposit " + principal.toString();
    document.getElementById("result").innerHTML+="<br>at an interest rate of " + rate.toString();
    document.getElementById("result").innerHTML+="%.<br>You will receive an amount of " + interest.toString();
    document.getElementById("result").innerHTML+=",<br>in the year " + years.toString();
    
    return interest;
}
        
