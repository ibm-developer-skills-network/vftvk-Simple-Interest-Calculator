function compute()
{
    //taking user input//
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    //Check to make sure postive number is entered//
          if (principal <= 0) 
          {
               alert("Enter a positive number");
               document.getElementById("principal").focus();
               return false;
          }
    
    //input calculated//
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);

    //text diplaying results of the calculation//
    document.getElementById("result").innerHTML = "<br/> If you deposit <mark>" + principal + "</mark><br/>" +
        "at an interest rate of <mark>" + rate + "</mark><br/>" +
        "You will receive an amount of <mark>" + interest + "</mark><br/> " +
        "in the year <mark>" + year + "</mark><br/>";

}
//funtion to update rate % next to rate bar//
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;

}
