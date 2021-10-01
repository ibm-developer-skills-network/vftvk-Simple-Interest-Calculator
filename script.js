function compute()
{
    // Get the Amount
    var principal = document.getElementById("principal").value;
    // Check the Value
    if ( principal <= 0 )
    {
        alert("Input a positive amount!!");
        return;
    }
    // Get the Rate
    var rate = document.getElementById("rate").value;
    // Get the Number of Years
    var years = document.getElementById("years").value;
    // Calculate the Interest
    var interest = principal * years * rate / 100;
    // Convert the Number of Years into Actual Year
    var year = new Date().getFullYear()+parseInt(years);
    // Show the Result
    document.getElementById("result").innerHTML=
               "If you deposit \<mark\>"+principal+ "\<\/mark\>"+
               ",\<br\>at an interest rate of \<mark\>"+rate+"%\<\/mark\>"+
               "\<br\>You will receive an amount of \<mark\>"+interest+ "\<\/mark\>"+
               ",\<br\>in the year \<mark\>"+year+ "\<\/mark\>"+
               "\<br\>"
}

function updateRate()
{
    // Get the Rate
    var rateval = document.getElementById("rate").value;
    // Update Rate Value in the Calculator
    document.getElementById("rate_val").innerText=rateval+"%";
}        