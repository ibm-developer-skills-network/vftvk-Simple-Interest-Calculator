

function compute()
{
    //alert("compute");

    var principal = document.getElementById("principal").value;

    if (principal > 0)
    {
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate /100;
        var year = new Date().getFullYear()+parseInt(years);

        var str = "<p>";
        str += "If you deposit <mark>$ " + principal; 
        str += "</mark> at an interest rate of <mark>" + rate + "%</mark>,";
        str += " you will receive an amount of <mark>$" + interest;
        str += "</mark> in the year <mark>" +  year + "</mark>."; 
        str += "</p>"
        document.getElementById("result").innerHTML = str;
    }
    else {
            alert("Enter a positive number for the Amount");
    }
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}


        