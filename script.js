function compute()
{
    // Test if valid amount has been entered
    if (document.getElementById("principal").value != "") {
        //Initialise the variables for storing user input
        var principal = document.getElementById("principal").value;
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;

        var interest = parseFloat(principal * years * (rate / 100)); //Calculate the growth of the investment
        var year = new Date().getFullYear() + parseInt(years);  //Calculation the year the investment matures

        //Prepare calculation result to be displayed to user
        var result = "If you deposit " + "<mark>" + principal +
            "<\/mark>" + ", <br\/> at and interest rate of " +
            "<mark>" + rate + "%" + "<\/mark>" +
            "<br\/> You will receive an amount of " + "<mark>" +
            interest + "<\/mark>" + ",<br\/> in the year " + "<mark>" +
            year + "<\/mark>" + "<br\/>";
        document.getElementById("result").innerHTML = result;
    }
    else {
        alert("No principal amount has been entered yet"); //raise warning if invalid principal amount is entered
        document.getElementById("principal").focus;
    }
}
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%"; //Display the value of the interest rate
}        