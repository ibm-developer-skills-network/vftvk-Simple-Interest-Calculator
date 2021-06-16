// Simple Interest Calculator Javascript

function compute()
{
    var principal = parseInt(document.getElementById("principal").value);
    var rate = parseInt(document.getElementById("rate").value);
    var years = parseInt(document.getElementById("years").value);

    var interest = principal * years * rate /100;
    var ppint = principal + interest; // Principal plus interest

    var year = new Date().getFullYear() + parseInt(years);
    
    var resultstr =  "<p>If you deposit " + "<span class='highlight'>" + principal + <\/span> + ",<br>";
        resultstr += "at an interest rate of " + "<span class='highlight'>" + rate + <\/span> + "%.<br>";
        resultstr += "You will receive an amount of " + "<span class='highlight'>" + ppint + <\/span> + ",<br>"; 
        resultstr += "in the year " + "<span class='highlight'>" + year + <\/span> +".<br><br><\/p>";
        
    document.getElementById("result").innerHTML = resultstr;      
}

/* UI enhancement to improve usability
of the calculator */
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}


        
