function compute()
{
    var principal = document.getElementById("principal").value;

    if(principal == "" || principal <= 0)
    {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }
    var rate = document.getElementById("rateVal").value;

    var years = document.getElementById("year").value;

    var interest = principal * years * rate / 100;

    var dateNow = new Date();

    var yearNow = parseInt(dateNow.getFullYear()) + parseInt(years);
    
    var resultDisplay = document.getElementById("result");
    resultDisplay.innerHTML = "If you deposit " + "<span class='highlight'>" + principal + "</span>."  
    + ", <br> at an interest rate of "+ "<span class='highlight'>" + rate + "</span>%." + 
    "<br> You will receive an amount of " + "<span class='highlight'>" + interest + "</span>" + ", <br> in the year "
    + "<span class='highlight'>" + yearNow + "</span>";
} 
