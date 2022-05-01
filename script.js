
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);


    //checking for a negative number
    if (principal <= 0 ){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
    else {
        document.getElementById("result").innerHTML="If you deposit\<span\> "+principal+"\</span\>,\<br\>at an interest rate of \<span\>"+rate+"\</span\>%\<br\>You will receive an amount of \<span\>"+interest+"\</span\>,\<br\>in the year \<span\>"+year+"\</span\>\<br\>";
    }
}