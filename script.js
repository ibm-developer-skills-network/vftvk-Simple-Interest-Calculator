function calculate() {
    var p = parseFloat(document.getElementById("p").value);
    var r = parseFloat(document.getElementById("r").value);
    var t = parseFloat(document.getElementById("t").value);
    var futureYear = new Date().getFullYear() + t;
    var result = document.getElementById("result");
    var interest = (p * t * r / 100);
    result.innerHTML = "The interest is " + interest.toFixed(2);
}

function updateRate() {
    var rateval = document.getElementById("r").value;
    document.getElementById("rate_val").innerText = rateval+"%";
}
