
function updateRate(){
	// get and report value for percentage rate
	var rateval = document.getElementById("rate").value
	document.getElementById("rate_val").innerText=rateval+"%";

}



function compute(){
	// set variable to principal input
	var principal = document.getElementById("principal").value;
	
	//validation for principal input
	if(principal <= 0){
	alert("Please enter a positive value");
	document.getElementById("principal").focus();
	return false;
	}
	
	var rate = document.getElementById("rate").value;
	var years = document.getElementById("years").value;

	var interest = principal * years * rate /100
	var year = new Date().getFullYear()+parseInt(years);


    p = document.getElementById("principal").value;
    document.getElementById("interest").innerText=interest;
    
  
    document.getElementById("result").innerHTML="If you deposit "+principal+",<br>at an interest rate of "+rate+"% <br>You will receive an amount of "+interest+"<br>in the year "+year;

    
    }