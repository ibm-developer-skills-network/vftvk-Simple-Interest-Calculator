function compute() {
    // document.getElementById("demo").innerHTML = "Hello World";

    var p = document.getElementById("principal").value;
    var r = document.getElementById("rateInput").value;
    var ap = r/100;
    var t = document.getElementById("years").value;
    var calculateYear = parseInt(new Date().getFullYear()) + parseInt(t);

    if (p == null || p == "") {
        alert("Please fill 'Amount' to calculate Simple Iterest.");
        return false;
    }

    var total;
    total = p * ap * parseInt(t)

    document.getElementById("demo").innerHTML = "If you deposit total " + p + ",<br>at an interest rate of " + r + "% per year,<br>You will receive an amount of " + total + ",<br>in the year " + calculateYear + "."
}