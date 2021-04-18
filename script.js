function compute()
/*
Note innerHTML tagging text.
*/

{
  var principal = document.getElementById("principal").value;
   if (principal > 0)
  {  
  var rate =  document.getElementById("rate").value; 
  var years =  document.getElementById("years").value; 
  var interest =  principal*years*rate/100; 
  var year = new Date().getFullYear()+parseInt(years);
  var result_text = "If you deposit \<mark\>"+principal+
  "\</mark\/>,\<br\> at an interest rate of \<mark\>"+rate+
  "\</mark\/> %,\<br\> you will receive an amount of \<mark\>"+interest+
  "\</mark\/>,\<br\> in the year \<mark\>"+year+"\</mark\/>\<br\>"
  document.getElementById("result").innerHTML = result_text; 
  }
  else
  {
    alert("Enter a positive number");
    principal.focus();
  }
  /*principal.focus()*/
}
function updateRate()
{
  var rateval =  document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = rateval; 
}
/*
function validatePrincipal()
{
  var principal = document.getElementById("principal").value;
  if (principal <= 0){
      return false
  } 
  return true
}
*/        
