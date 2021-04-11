var principal = 0;
var rate = 0;
var years = 0;
var interest = 0;

function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("Rate").value;
    var years = document.getElementById("years").value;
    var interest = principal*years*rate/100;
    document.getElementById("principal").innerHTML = "If you deposit";
    document.getElementById("Rate").innerHTML = "at an interest rate of";
    document.getElementById("interest").innerHTML = "You will receive an amount of ";
    document.getElementById("years").innerHTML = "in the year";
}
 function Years()
 {
     if(years<=10)
    {
        return years;
    }
} 
  function myRate()
  {
      event.getElementById("range").value;
  }    
 
  