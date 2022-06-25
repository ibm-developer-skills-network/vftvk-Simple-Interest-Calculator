let principal = document.getElementById("principal");
let rate = document.getElementById("rate");
let years = document.getElementById("years");
function checkData() {
    console.log(principal.value.length);
    if (principal.value <= 0 | principal.value.length == 0) {
        alert("Enter a positive number");
        document.getElementById('result').innerText = '';
        return false;
    }
    compute();
    return true;
}
function compute() {
    let result = principal.value * (rate.value / 100) * years.value;
    years = new Date().getFullYear() + parseInt(years.value);
    let template = `<p>If you deposit <span class="highlight">${principal.value}</span>,<br>at an interest rate of <span class="highlight">${rate.value}%</span>.<br>You will receive an amount of <span class="highlight">${result}</span>,<br>    in the year <span class="highlight">${years}</span></p>`;
    document.getElementById('result').innerHTML = template;
}