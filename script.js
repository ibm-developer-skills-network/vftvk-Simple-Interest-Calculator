// compute accumulated interest based on user input
function compute()
{
    // get elements from document
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    // calculate interest and year
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear() + parseInt(years);

    // validate input and display results if valid
    if (principal <= 0)
    {
      alert("Enter a positive number");
    }
    else
    {
      document.getElementById("result").innerHTML = "If you deposit <span class = 'highlight'>" + principal + "</span>,<br/>at an interest rate of <span class = 'highlight'>" + rate + "%</span><br/>You will receive an amount of <span class = 'highlight'>" + interest + "</span>,<br/>in the year <span class = 'highlight'>" + year + "</span><br/>"
    }
}

// update interest rate under slider
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
