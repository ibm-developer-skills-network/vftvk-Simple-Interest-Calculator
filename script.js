function compute()
{
    console.log("Hi");
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
    
    var result = "If you deposit " + principal;
    result += "\n at an interest of " + rate;
    result += "%.\n You will receive an amount of " + interest;
    result += "\nin the year " + year;
    document.getElementById("result").innerText = result;
    console.log(result);
}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}
        