//function to display the value in the slider
var rate_val;
function updateRate() 
{
    var rate_val = document.getElementById("rate_val").value;
    document.getElementById("rate_val").innerText=rate_val;
}

function compute()
{
    
    var principal = document.getElementById("principal").value;
    //checking whether the principal amount is positive or negative
    var num = Math.sign(principal);
    if(num == -1 || num==0)
    {
        alert("Enter a positive number");
    }
    var years = document.getElementById("years").value;
    //computing the result
    var interest = principal * years * rate_val /100
    var amount = principal*Math.pow((1+rate_val/100),t);
    var year = new Date().getFullYear()+parseInt(years);
    //date object
    document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>"
}

        