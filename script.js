function compute()
{
    var principal = new Number(document.getElementById("principal").value);
    var rate = new Number(document.getElementById("rate").value);
    var years = document.getElementById("years").value;
    if (principal == ""){
        alert("Enter a positive number!")
        principal = 100000;
        principal.focus();
    };
    if (rate == ""){
        rate == 3.5;
    };
    var interest = principal*rate*years/100;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML="If you deposit " + principal + ",\nat an interest rate of " + rate + "%.\nYou wil receive an amount of " + interest +",\nin the year " + year;


}

function updateRate(){
    var rateVal = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateVal+"%";
}
