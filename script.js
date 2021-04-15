function compute() {
    var p = document.getElementById("principal").value;
    if (p <= 0) {
        alert("Please enter a number greater than zero");
        document.getElementById("principal").focus();
        document.getElementById("principal").click();
        return null;
    }
    var r = document.getElementById("rate").value;
    var y = document.getElementById("years").value;
    console.log(y);
    var interest = p * r * y / 100;
    console.log(p * r);
    var ndate = new Date();
    newdate = ndate.getFullYear();
    newdate += parseInt(y);
    document.getElementById("result").innerHTML = "<br>" + "If you deposit " + "<span class='highlight'>" + p + '</span>' + '<br>' + ' at an interest rate of ' + "<span class='highlight'>" + r + '</span>' + '%.' + '<br>' + 'You will recive an amount of ' + "<span class='highlight'>" + interest + '</span>' + '<br>' + 'In the year ' + "<span class='highlight'>" + newdate + '</span>';
}

function ratechange() {
    var rchng = document.getElementById("rate").value;
    document.getElementById("rate-displayer").innerHTML = rchng + '%';
}