function compute()
{
	// This function purpose is to compute interest amount from fields given in screen
	var principal = document.getElementById("principal").value;
	var rate      = document.getElementById("rate").value;
	var years     = parseInt(document.getElementById("years").value);
	
	var	interest = principal * years * rate / 100;
	
	yearToday = new Date();
	finalYear = yearToday.getFullYear() + years;		// this is the year of current year's date + annuity number requested
		
	// result only displayed if principal amount is positive
	if  (positiveAmount())
		document.getElementById("result").innerHTML = "If you deposit <font class='resultFont'>"+principal+"</font><br>at an interest of <font class='resultFont'>"+rate+"%</font>,<br>You will receive an amount of <font class='resultFont'>"+interest+"</font>,<br>in the year <font class='resultFont'>"+finalYear+"</font>";

}

function sliderValue() {
	// give value of slider after change in dedicated <span>
	var rate = document.getElementById("rate").value;
	document.getElementById("rateSpan").innerHTML = rate + " %";
}

function positiveAmount () {
	// test positivity of principal amount. If not the focus will be set back to principal field
	if	(document.getElementById("principal").value > 0)
		return true;
	else {
		alert("Enter a positive number");
		document.getElementById("principal").focus();
		return false;
	}		
}
