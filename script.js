function compute()
{
    // get elements from document
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    // calculate interest and year
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear() + parseInt(years);

    if (principal <= 0)
    {
      document.getElementById("result").innerHTML = "Please enter a positive value for amount"
    }
    else
    {
      document.getElementById("result").innerHTML = "If you deposit <span id = 'highlight'>" + principal + "</span>,<br/>at an interest rate of <span id = 'highlight'>" + rate + "%</span><br/>You will receive an amount of <span id = 'highlight'>" + interest + "</span>,<br/>in the year <span id = 'highlight'>" + year + "</span><br/>"
    }
}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
