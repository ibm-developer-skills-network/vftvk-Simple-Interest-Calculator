function displayvalue(){
    var rateval = document.getElementById ("rate").value;
    document.getElementById("rate_val").innerHTML = rateval + '%'; 
}

function compute(){
    var principal = document.getElementById("principal").value;
		// add validation for principal - amount input box.
	if (principal <= 0){
		alert ("Enter a positive number");
		document.getElementById("principal").focus();
		return false;}
    if (principal =="") {alert ("Enter a positive number");
    document.getElementById("principal").focus();
    return false;}
        
    
    var rate = document.getElementById("rate").value;
	var years = document.getElementById("years").value;
    var interest = parseInt(principal)+(principal*years*rate/100);
    var release_year = new Date().getFullYear()+parseInt(years);
    var release_year = new Date().getFullYear()+parseInt(years);
    /* i am going to use, the recent year */
    document.getElementById("result").innerHTML = 'If you deposit <span class="yellow">'+principal+'</span>,<br> at an interest rate of <span class="yellow">'+rate+'% </span>,<br> You will receive an amount of <span class="yellow">'+interest+'</span>,<br> in the year <span class="yellow">'+release_year+'</span>';
}


        