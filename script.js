function compute()
{
    //get values and calculate to have the variables
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseInt(document.getElementById("years").value);
    var interest = principal * years * rate / 100;
    var yearInTheFuture = new Date().getFullYear() + years;
    //Update the result span to add interest text
    //<mark></mark> to add highlights to the results
    document.getElementById("result").innerHTML="If you deposit <mark>" + principal + "</mark>,<br\>" +
    "at an interest rate of <mark>" +rate + "%</mark>,<br/>" +
    "You will receive an amount of <mark>" + interest + "</mark>,<br/>" +
    "in the year <mark>" +yearInTheFuture+ "</mark>,<br/>"


}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

function validatePrincipal()
{
    var principal = document.getElementById("principal").value;
    var biggerZero = parseInt(principal) > 0;
    if (!biggerZero) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
//Trying to add a fix for NaN If nothing is placed in the amount field should display "ENTER A PRINCIPLE VALUE"
    //else if (principal=NaN) {
        //alert("Enter a number");
        //document.getElementById("principal").focus();}

}