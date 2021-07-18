function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
//added variables
    if (principal <= 0 || isNaN(principal))
    {
        alert("Enter a valid number");
        document.getElementById("principal").focus();
        return

    }


    var interest = principal * years * rate /100;
    var year = new Date().getFullYear() + parseInt(years);
    document.getElementById("result").innerHTML="If you deposit <strong>£"+principal+"</strong>,\<br\>at an interest rate of <strong>"+rate+"%</strong>\<br\>You will receive an amount of <strong>£"+interest+"</strong>,\<br\>in the year <strong>"+year+"</strong>\<br\>"

//added function and text    
}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";
}