function compute()
 //Get the values and calculate 
{
    var principal = ParseFloat(document.getElementById("principal").value);
    var rate = ParseFloat(document.getElementById("rate").value);
    var years = ParseInt(document.getElementById("years").value);
    var interest = principal * years * rate / 100;
    var yearInTheFuture = newDate().getFullYear() + year;
//     creating the interest as required 
    document.getElementById("result").innerHTML = "Interest : If you deposit <mark>" + principal + "</mark>,<br/>" +
        "at an interest rate of <mark>" + rate + "</mark>,<br/>" +
        "You will receive an amount of <mark>" + interest + "</mark>,<br/> " +
        "in the year <mark>" + yearInTheFuture + "</mark>";

    
    
}

//update ther ate value
function getSliderValue() {
    document.getElementById("rateSpan").innerHTML = document.getElementById("rate").value;
}

//Check for positive values
function validateAmount() {
    var principal = document.getElementById("principal").value;
    var biggerThanZero = parseInt(principal) > 0;
    if (!biggerThanZero) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }

}
