// This fucntion calculate the interest value with 3 inputs  : Amount of money invested, the rate, and the time in years
function compute()
{
    // Get the value of the input Amount with id="principal"
    let x = document.getElementById("principal").value;
    // If x is Not a Number or less than one 
    let text;
    if (isNaN(x) || x < 1 ) {
    alert( "Enter a positive number");
    } 
    // If x is a Number or more than one : calculate the result of interest with all the data
    else {
        var principal = document.getElementById("principal").value;
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate /100;
        var year = new Date().getFullYear()+parseInt(years);
    
        document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,<br> at an interest rate of <mark>"+rate+"%.</mark><br>You will receive an amount of <mark>"+interest+"</mark>,<br>in the year <mark>"+year+"</mark>";
        }
}

// This fucntion take the current value of the range object to show on the right side of the range
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}

// This fucntion check if the Amount value is > to 0. And if not open a alert box
function myAlert() {
    // Get the value of the input field with id="numb"
    let x = document.getElementById("principal").value;
    // If x is Not a Number or less than one or greater than 10
    let text;
    if (isNaN(x) || x < 1 ) {
      alert( "Enter a positive number");
    } 
  } 
        