// Computes how much interest the user stands to gain
function compute()
{
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseInt(document.getElementById("years").value);
    // Calculate how much interest the user will gain
    var interest = principal * years * rate / 100;
    var d = new Date();
    // Calculate what year it will be after waiting the selected amount of time
    var futureYear = years + d.getFullYear();
    // If the user input a positive number, let them know how much interest they will gain
    if (princpal > 0) {
        document.getElementById("result").innerHTML = "If you deposit <mark>" + principal + "</mark>,<br/>at an interest rate of <mark>" + rate + "%</mark>.<br/>You will receive an amount of <mark>" + interest + "</mark>,<br/>in the year <mark>" + futureYear + "</mark><br/>";
    } else { // If the user did not input a positive number, remind them to do so
        alert("Enter a positive number");
        // Return focus to the principal field
        document.getElementByID("principal").focus();
    }
}

// Displays what the rate slider is currently set to
function showRate() {
    var rate = document.getElementById("rate").value;
    document.getElementById("rateviewer").innerHTML = rate + "%";
}
