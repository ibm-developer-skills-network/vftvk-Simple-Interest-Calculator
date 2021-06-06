function check()/*to check pricipal is positive*/
{
    var principal = document.getElementById("principal").value;
    var text = "Enter a positive number";
    if(principal<=0)
    alert(text);
}
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var year = new Date().getFullYear()+parseInt(years);
    var interest = principal*years*rate/100;
    var amount = Number(principal) + Number(interest);/*total amount */
    document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an interest of "+interest+", and a total of "+amount+"\<br\>in the year "+year+"\<br\>";
    
}
function updateRate()
{
    var rateval =document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}   
        
