        
function compute()
{
var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").valuel;
var years = document.getElementById("years").valuel;
var interest = principal * years * rate/100;
var year = new Date().getFullYear() + parseInt(years);

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
 function checkdata()
 {
     if (principal==0){
         alert("Enter a positive number");
     }
     
     else if (principal<0){
        alert("Enter a positive number");
     }
     else{
     return (true);
     }
 }
}
