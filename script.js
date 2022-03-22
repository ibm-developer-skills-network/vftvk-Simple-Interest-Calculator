// function to calculate interest
function compute()
{
   var principal = document.getElementById("principal").value;
   var rate=document.getElementById("rate").value;
   var years=document.getElementById("years").value;
   
   var interest = principal * years * rate /100;
   
   var year=new Date().getFullYear()+parseInt(years);
   document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"%</mark>.\<br\>You will receive an amount of <mark>"+interest+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>";

   
    
}

//function to display the value of the range slider
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;

}


//function to alert the user when the amount entered is negative or null
function validatePrincipal(){
	// get the value of the input field with id="principal"
	let x=document.getElementById("principal").value;
	if(x<1)
	{alert("Enter a positive number");
	window.onload = function () {
            document.getElementById("principal").onfocus();
        };
		return false;
	}
}
		
	
	