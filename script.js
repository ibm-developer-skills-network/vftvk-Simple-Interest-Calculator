function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerText="If you deposit "+principal+", at an interest rate of "+rate+"% You will receive an amount of "+interest+", in the year "+year+".";
    
}
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
/*
function movetoinput() {
    var toinput = document.getElementById("years").value;
    document.getElementById("lata").innerText=toinput;
}
*/
        