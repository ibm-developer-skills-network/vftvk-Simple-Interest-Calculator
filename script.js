function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    if (principal < 1){
		alert("Enter a positive number");
		principal.focus;
	}
	if (principal == ""){
		alert("Enter a positive number");
		principal.focus;
	}
	else {
		var interest = principal * years * rate / 100;  
    	var year = new Date().getFullYear()+parseInt(years);  
		document.getElementById("result").innerHTML = "If you deposit <mark>" + principal + "</mark>,</br> at an interest rate of <mark>" + rate + "</mark>%. </br> You will recieve an amount of <mark>" + interest + "</mark>, </br> in the year <mark>" + year + "</mark>"
	}
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
