
//compute and display the results  
function compute()
{
    //grab the principal amount
    var principal = document.getElementById("principal").value;

    //if the principal amount is greater than zero, then continue
    if (principal > 0)
    {
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate /100;
        var year = new Date().getFullYear()+parseInt(years);

        //
        var str = "<p>";
        str += "If you deposit <mark>$ " + principal; 
        str += "</mark> at an interest rate of <mark>" + rate + "%</mark>,";
        str += " you will receive an amount of <mark>$" + interest;
        str += "</mark> in the year <mark>" +  year + "</mark>."; 
        str += "</p>"
        document.getElementById("result").innerHTML = str;
    }
    else {
        //if the principal amount is less than or equal to zero, 
        //then alert the user to enter a positive number
        alert("Enter a positive number for the Amount");
        document.getElementById("principal").focus();
    }
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}


        