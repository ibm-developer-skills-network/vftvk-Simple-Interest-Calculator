function compute()
{
    p = document.getElementById("principal").value;

    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate/100;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML="If you deposit \<mark\>"+principal+"\</mark\>,\<br\>at an interest rate of \<mark\>"+rate+"%\</mark\>\<br\>You will receive an amount of \<mark\>"+interest+"\</mark\>,\<br\>in the year "+year+"\<br\>";

    
    
}

function updateRate() {
        var rateval = document.getElementById("rate").value;
        document.getElementById("rate_val").innerText=rateval;
    }

function form_validation() {
    const amount = document.getElementById("principle");
    if (amount <= 1) {
        alert("Enter a positive number")
    }
}
