/* Create a function to compute the interest earned */
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var amount = interest;
    var year = new Date().getFullYear()+parseInt(years, 10); /* calculate year of earnings */
    /* check for proper principal entered */
    if(principal<=0)
     {alert("Principal should be greater than 0")}
    else 
        {document.getElementById("result").innerHTML="If you deposit $"+<mark>principal</mark>+"\<br\>at an interest rate of "+<mark>rate</mark>+"%\<br\>you will receive an amount of $"+<mark>amount</mark>+",\<br\>in the year "+<mark>year</mark>+"\<br\>";}
    
}
/* create function to adjust value label on slider */
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}        
