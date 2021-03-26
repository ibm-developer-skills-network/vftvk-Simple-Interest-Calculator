function compute(principal,rate,year)
{
  var principal= document.getElementById("principal").value;
  var p= parseInt(document.getElementById("principal").value);
   if (p == 0 || p<0) {
    alert("Enter a positive number");
    return false;
   }
  var rate= document.getElementById("rang").value;
  var r= parseFloat(document.getElementById("rang").value);
  var year=document.getElementById("years").value;
  var y= parseInt(document.getElementById("years").value);
  
    var interest = principal*rate*year/100;
 document.getElementById("p").innerHTML=p
  document.getElementById("r").innerHTML=r
  document.getElementById("result").innerHTML=interest
  document.getElementById("y").innerHTML=2021+y
}
function show_value(x)
{
document.getElementById("slider_value").innerHTML=x
}

