function compute()
{
    var principal = document.getElementById("principal").value;
    if(principal<=0 || isNaN(principal)){
        alert("Please enter a positive number")
        document.getElementById("principal").focus();}
    else{
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate /100;
        var year = new Date().getFullYear()+parseInt(years);
        document.getElementById("result").innerHTML="If you deposits <mark>"+
            principal+"</mark>,\<br\>at an interest rate of <mark>"+
            rate+"%</mark>.\<br\> You will recieve an amount of <mark>"+
            interest+"</mark>,\<br\> in the year <mark>"+year+"</mark>";}
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}