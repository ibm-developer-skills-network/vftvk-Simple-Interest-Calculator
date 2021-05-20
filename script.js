// COMPUTE INTEREST FUNCTION
function compute()
{
    // AMOUNT VALIDATION
        var principal = document.getElementById("principal");

        if(principal.value <= 0){
            alert("Please enter a positive number.");
            principal.focus();
            return false;
        } else
    // VARIABLES
        var principal = document.getElementById("principal").value;
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate /100;
        var year = new Date().getFullYear()+parseInt(years);
    /* 
        SPAN ID RESULT
        <MARK></MARK> HIGHLIGHTS THE RESULTS
    */
        document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"%</mark>\<br\>You will receive an amount of <mark>"+interest+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>"
}

// UPDATE RATE FUNCTION
function updateRate() 
{
        var rateval = document.getElementById("rate").value;
        document.getElementById("rate_val").innerText=rateval;
}
