function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}      
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    if (principal <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }else
    {
      var impr= "<br/><br/>If you deposit "+"<mark>"+document.getElementById("principal").value+"</mark>," +
      "<br/>at an interest rate of "+"<mark>"+document.getElementById("rate").value+"%</mark>." +
      "<br/>You will receive an amount of "+"<mark>"+ interest+"</mark>," +
      "<br/>in the year "+"<mark>"+ year+"</mark>";
      
			document.getElementById("result").innerHTML=impr;
  }
  }