function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
    if (principal == 0 || principal < 0) {
        alert(`You should see an alert "Enter a positive number".`)
    }
    else {
        var d = `<p>If you deposit ${principal},<br/>
    at an interest rate of ${rate}.<br/>
    You will receive an amount of ${interest},<br/>
    in the year ${year}.</p>`
        document.getElementById("result").innerHTML = d;
    }

}
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;


}
