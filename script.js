function compute()
{
var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;

var interest = principal * years * rate /100;

var year = new Date().getFullYear() + parseInt(years);

if (principal==null || principal==""){
alert("input field cannot be empty ");
return false;
}
else if(principal<=0){
alert("enter a valid number");
return false
}

document.getElementById("result").innerHTML = "If you deposit " + '<span style="background-color:yellow;">'+ principal + "</span><br>" + "At an interest rate of " + '<span style="background-color:yellow;">' + rate + " % </span><br>" + "You will receive an amount of " + '<span style="background-color:yellow;">' + interest + '</span> <br>' + "In the year " + '<span style="background-color:yellow;">' + year + '</span>' ;

}

function updateRate () {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
    
    }
	