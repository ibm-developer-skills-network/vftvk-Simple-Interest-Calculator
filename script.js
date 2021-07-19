function compute()
{
    // get elements from document
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    // calculate interest and year
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear() + parseInt(years);
}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
