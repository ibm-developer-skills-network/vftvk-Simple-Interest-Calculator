function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML="<b>"+rateval+"</b>";
}
function compute()
{
	var principal = document.getElementById("principal").value;
	var rate  = document.getElementById("rate").value;
	var years = document.getElementById("years").value;
	var interest = principal * years * rate /100;
	var year = new Date().getFullYear()+parseInt(years);
    //p = document.getElementById("principal").value;
    var amount = principal+interest;

    var result = "<p id='resultparagraph'>If you deposite: <mark>"+principal+"</mark><br>"+
    "at an interest rate of: <mark>" +rate+"</mark><br>"+
    "You will receive an amount of: <mark>"+interest+"</mark><br>"+
    "in the year <mark>"+year+"</mark></p>";
    document.getElementById("result").innerHTML=result;
    
}