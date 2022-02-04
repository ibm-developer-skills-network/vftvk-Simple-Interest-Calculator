function updateRate() 
{
    // Gets the correct range selected by user from the SPAN and displays in the page
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

function compute()
{
    //Calculates the amount the return the valid year
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var Amount = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%,\<br\>You will receive an amount of "+Amount+",\<br\>in the year "+year+"\<br\>"
}

function checkdata()
{
    //create references to the input elements we wish to validate
    var amtcheck = document.getElementById("principal").value;

    //Check if amount field is zero
    if(amtcheck == 0 )
    {
        
            alert("Please enter the positive number");
            amtcheck.focus();
            return false;
          
      
    }
    return true;
}

//Just for my reference
function myFunction(val) {
    alert("The input value has changed. The new value is: " + val);
  }
