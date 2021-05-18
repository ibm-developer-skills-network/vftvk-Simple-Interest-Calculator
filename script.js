




function updateRate() 
{   console.log("called");
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
    // var rateval = document.getElementById("rate_val").value;
 
}
ı
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rateval").value;
    var years = document.getElementById("years").value;
    var year = new Date().getFullYear()+parseInt(years);

    var amount = principal * years * rate /100;
document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>"
}
        