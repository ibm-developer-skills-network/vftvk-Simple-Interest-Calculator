var principal = document.getElementById("principal");
var rate = document.getElementById("rate");
var years = document.getElementById("years");
function checkData() {
    if (principal.value <= 0 | principal.value.length == 0) {
        alert("Enter a positive number");
        document.getElementById('result').innerText = '';
        return false;
    }
    compute();
}
function compute() {
    var result = Math.round(principal.value * (rate.value / 100) * years.value);
    var result_year = new Date().getFullYear() + parseInt(years.value);
    console.log(typeof(result), result);
    console.log(typeof(result_year), result_year);
    var template = `<p>If you deposit <span class="highlight">${principal.value}</span>,<br>at an interest rate of <span class="highlight">${rate.value}%</span>.<br>You will receive an amount of <span class="highlight">${result}</span>,<br>    in the year <span class="highlight">${result_year}</span></p>`;
    document.getElementById('result').innerHTML = template;
}