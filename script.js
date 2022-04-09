function compute() {
    // document.getElementById("demo").innerHTML = "Hello World";

    var p = document.getElementById("principal").value;
    var r = document.getElementById("rateInput").value;
    var ap = r/100;
    var t = document.getElementById("years").value;
    var calculateYear = parseInt(new Date().getFullYear()) + parseInt(t);

    if (p == null || p == "") {
        alert("Please fill 'Amount' to calculate Simple Iterest.");
        document.getElementById("principal").focus();
        return false;
    } else if (p == 0 || p < 0){
        alert("Please enter Principal amount greater than 0.");
        document.getElementById("principal").focus();
        return false;
    }

    var total;
    total = p * ap * parseInt(t)

    document.getElementById("demo").innerHTML = "If you deposit total <mark>" + p + "</mark>,<br>at an interest rate of <mark>" + r + "%</mark> per year,<br>You will receive an amount of <mark>" + total + "</mark>,<br>in the year <mark>" + calculateYear + "</mark>."
}
  