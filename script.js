function compute()
{
    var principal =document.getElementById("principal").value;

    if (principal <= 0 || principal == "")
    {
        alert("Enter a positive number");
document.getElementById("principal").focus();
        return;
    }

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;

 var dateNow = new Date();
    var yearNow = parseInt(dateNow.getFullYear()) + parseInt(years);

   var resultDisplay = document.getElementById("result");
    resultDisplay.innerHTML = "If you deposit " + "<span class='highlight'>" + principal + "</span>"  + ", <br> at an interest rate of "+ "<span class='highlight'>" + rate + "</span>%." + "<br> You will receive an amount of " + "<span class='highlight'>" + interest + "</span>" + ", <br> in the year " + "<span class='highlight'>" + yearNow + "</span>";
}

function updateRate()
{
    var rateval = document.getElementById("rate");
    var output = document.getElementById("rate_val");
    output.innerHTML = rateval.value + "%";


}
