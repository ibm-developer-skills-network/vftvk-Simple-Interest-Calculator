//Funtion to compute rate of interest
function compute()
{

   
   var principal = document.getElementById("principal").value;
   var rate = document.getElementById("rate").value;
   var years = document.getElementById("years").value;
   var interest = principal * years * rate /100;
   var year = new Date().getFullYear()+parseInt(years);
   var amount =interest +rate ;
   if (principal<=0)
   { 
        alert("Enter Positive no ")
        document.getElementById('principal').value = "";
   }
   else
    {
        document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>"
    }
    
}
//Funtion to update rate of interest dynamically on slider

 function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}