
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
	var year = new Date().getFullYear()+parseInt(years);
	var interest = principal * years * rate /100;
	var result = document.getElementById("result").value;	
	
	if (principal<1)
	{
		alert("Enter a positive number");
		document.getElementById("principal").focus();
	}
	else{    
		document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"%</mark>\<br\>You will receive an amount of <mark>"+interest+"</mark>,\<br\>in the year "+ year +"\<br\>"
	}
    
}
        
		
