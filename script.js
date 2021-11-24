
function compute(){
// Fetch the User Input
var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;
var interest = principal * 0.01 * rate * years;

// Test
console.log(typeof(principal));
console.log(typeof(rate));
console.log(typeof(years));
console.log(typeof(interest));

var date = new Date();
var current_year = date.getFullYear();
var year = current_year + parseInt(years);

console.log(typeof(year));

document.getElementById("result").innerHTML="If you deposit "+principal.bold()+",\<br\>at an interest rate of "+rate.bold()+"%\<br\>You will receive an amount of "+interest.toString().bold()+",\<br\>in the year "+year.toString().bold()+"\<br\>"

return false;
}


function showRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML = rateval;
}