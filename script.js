function toggleInterestType() {
    var simple = document.getElementById("simple");
    var compound = document.getElementById("compound");
    var compoundDiv = document.getElementById("compound_div");

    if (compound.checked) {
        compoundDiv.style.display = "block";
    } else {
        compoundDiv.style.display = "none";
    }
}

function calculate() {
    var p = parseFloat(document.getElementById("p").value);
    var r = parseFloat(document.getElementById("r").value);
    var t = parseFloat(document.getElementById("t").value);
    //var interest = 0;

    if (document.getElementById("simple").checked) {
        var interest = (p * t * r) / 100;
    } else {
        var n = parseFloat(document.getElementById("n").value);
        interest = p * (Math.pow((1 + (r / (100 * n))), (n * t)) - 1);
    }

    var result = document.getElementById("result");
    result.innerHTML = "The interest is " + interest.toFixed(2);
}

function calculateCompound() {
    var p = parseFloat(document.getElementById("p").value);
    var r = parseFloat(document.getElementById("r").value);
    var t = parseFloat(document.getElementById("t").value);
    var n = parseFloat(document.getElementById("n").value);

    var interest = p * (Math.pow((1 + (r / (100 * n))), (n * t)) - 1);

    var result = document.getElementById("result");
    result.innerHTML = "The interest is " + interest.toFixed(2);
}

function updateRate() {
    var rateval = document.getElementById("r").value;
    document.getElementById("rate_val").innerText = rateval + "%";
}