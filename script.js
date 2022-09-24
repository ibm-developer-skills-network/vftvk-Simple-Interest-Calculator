function compute()
{
    var principal = document.getElementById("principal").value;
    //Validation for principal
    if(Number(principal) < 0 || principal == ''){
        alert("Enter positive number");
        document.getElementById("principal").focus();
        return false;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate/100;
    var year = new Date().getFullYear()+parseInt(years);
    //embed the text inside the span with result id
    document.getElementById("result").innerHTML = 
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If you deposit <mark>"+principal+"</mark>,<br/>"+
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;at an interest rate of <mark>"+rate+ "%.</mark><br/>"+
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You will receive an amount of <mark>"+interest+",</mark><br/>"+
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;in the year <mark>"+year+"</mark><br/><br/>";
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
        