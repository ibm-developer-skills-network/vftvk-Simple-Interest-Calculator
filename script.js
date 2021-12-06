function compute() {
	var principal = document.getElementById("principal").value;
	var rate =  document.getElementById("rate_val").value;
	var years = document.getElementById("years").value;
	var interest = principal * years * rate/100;
	var year = new Date().getFullYear()+parseInt(years);    
}

 function validate() {
         if( principal.value == "0" ) {
            alert( "Enter a positive number" );
            principal.focus() ;
            return false;
         }

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

var n = "years";
var y = Math.floor(n);            // whole years

document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+y+"\<br\>"
