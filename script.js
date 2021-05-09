function compute()
{
    //p = document.getElementById("principal").value;
    var principal = document.getElementById("principal").value;
    if(principal == 0 || principal < 0){
          alert( "Enter a positive number");
                username.focus();
                return false;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    var res = document.getElementById("res").value;
    document.getElementById("res").innerHTML = "If you deposit" + " " + principal    ;
    document.getElementById("res").innerHTML += "," ;
    document.getElementById("res").innerHTML += "at an interest rate of" + " " + rate + "." ;
    document.getElementById("res").innerHTML += "You will receive an amount of" + " "  + interest +","  ;
    document.getElementById("res").innerHTML += "in the year" + " " + year ;
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        
