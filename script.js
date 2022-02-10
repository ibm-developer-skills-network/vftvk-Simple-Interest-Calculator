function compute()
{
   //Get Principal value from user. If negative or zero return to principal
   var principal = document.getElementById("principal").value;
   if (principal <= 0){
    alert("Enter a positive number");
    document.getElementById("principal").focus();
   }
   else{
   //Get rate of interest and year
       var rate = document.getElementById("rate").value;
       var years = document.getElementById("years").value;
   //Compute interest value
       var interest = principal * years * rate /100;
   //Parse years value to get actual year
       var year = new Date().getFullYear()+parseInt(years);
   //Get the final result to page
       document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"%</mark>\<br\>You will receive an amount of <mark> "+interest+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>"
   }

    
}
function updateRate()
{
//Update rate value based on slider change to get user input
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}