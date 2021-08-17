function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    y = document.getElementById("years").value;

    i = p*((r/100)*y);
    document.getElementById("result").innerHTML = "If you deposit " + p + ",<br />" + 
    "at an interest rate of " + r + ".<br />" +
    "You will receive an amount of " + i.toFixed(0) + ",<br />" +
    "in the year " + y;
    //console.log(i);
}

