function compute()
{
    // HTML node references
    var principal = document.getElementById("principal");
    var rate = document.getElementById("rate");
    var years = document.getElementById("years");
    var result = document.getElementById("result");

    // Amount validation
    if (principal.value == "" || principal.value <= 0){
        alert("Enter a positive number");
        principal.focus();

        return false;
    }

    // Interest calculation
    var interest = principal.value * rate.value * years.value /100;
    
    // Convert number of years to a date
    var year = new Date().getFullYear() + parseInt(years.value);

    // Output message
    var message = "If you deposit <mark>" + principal.value + "</mark>," +
    "\<br>\ at an interest rate of <mark>" + rate.value + "%</mark>." +
    "\<br>\ You will receive an amount of <mark>" + interest + "</mark>," +
    "\<br>\ in the year <mark>" + year + "</mark>";

    // Insert message back into page
    result.innerHTML = message;

    // If everything goes well, return true
    return true;
}
        

// Update Rate
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    
    document.getElementById("rate_val").innerText = rateval + "%";
}
