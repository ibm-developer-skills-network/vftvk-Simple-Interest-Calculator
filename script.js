// Simple Interest Calculator Javascript

function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    var interest = principal * years * rate /100;

    var year = new Date().getFullYear()+parseInt(years);
    
    document.getElementById("result").innerText = 
        "<br>If you deposit " + principal + ",<br>" + 
        "at an interest rate of " + rate + "%.<br>" +
        "You will receive an amount of " +  ppint + ",<br>" +
        "in the year " + year +".<br><br>";
        
}

/* UI enhancement to improve usability
of the calculator */
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}


        
