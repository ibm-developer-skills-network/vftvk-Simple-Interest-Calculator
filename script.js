function compute()
{
    var principal = document.getElementById("principal"); //var principal for if
    if (principal.value <= 0) {
        alert("Please enter a positive number");
        principal.focus(); 
        return false;
    } else
    var principal = document.getElementById("principal").value; //var principal for result
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years); //local time.only year plus years chosen
    document.getElementById("result").innerHTML="If you deposit <b>"+principal+"</b>, at an interest rate of <b>"+rate+"%</b> You will receive an amount of <b>"+interest+"</b>, in the year <b>"+year+"</b>.";
    
}
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
