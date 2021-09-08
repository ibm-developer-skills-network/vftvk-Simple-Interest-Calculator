function compute()
{
    var kwota = document.getElementById("amount").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var year = new Date().getFullYear()+parseInt(years);
    var interest = kwota*years*rate/100;
    document.getElementById("result").innerHTML="\<br\>If you deposit "+kwota+"$,\<br\>at an interest rate of "+rate+"%,\<br\>you will receive "+interest+"$,\<br\>in the year "+year+".\<br\>";
}


function updateRate ()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}


function checkdata()
{
    var kwota = document.getElementById("amount")
    if(kwota.value<=0){
        alert("OOPS! You must enter a positive number. Otherwise the interest result makes no sense.");
        kwota.focus();
        return false;
    }
    return true;
}


        