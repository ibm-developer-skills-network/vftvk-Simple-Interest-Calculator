var principal = document.getElementById("principal");
var rate = document.getElementById("rate");
var years = document.getElementById("years");
function checkData() {
    if (principal.value <= 0 | principal.value.length == 0) {
        alert("Enter a positive number");
        document.getElementById('result').innerHTML = '';
        principal.focus();
        return false;
    }
    compute();
}
function compute() {
    var interest = Math.round(principal.value * years.value * rate.value / 100);
    var year = new Date().getFullYear() + parseInt(years.value);
    var template = `If you deposit <span class="highlight">${principal.value}</span>,<br>at an interest rate of <span class="highlight">${rate.value}%</span>.<br>You will receive an amount of <span class="highlight">${interest}</span>,<br>    in the year <span class="highlight">${year}</span>`;
    document.getElementById('result').innerHTML = template;
}