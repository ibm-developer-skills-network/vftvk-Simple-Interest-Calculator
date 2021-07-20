function compute() {
    var principal = document.getElementById('principal').value;
    if (isNaN(parseInt(principal)) || parseInt(principal) <= 0) {
        alert("Enter a positive number");
        document.getElementById('principal').focus();
        return;
    }
    var rate = document.getElementById('rate').value;
    var years = document.getElementById('years').value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById('result').innerHTML = 'If you deposit <span class="result_number">$'+parseInt(principal).toLocaleString()+'</span>, <br/>at an interest rate of <span class="result_number">'+rate+'%</span>. <br/>You will receive an amount of <span class="result_number">$'+parseFloat(interest).toLocaleString()+'</span>, <br/>in the year <span class="result_number">'+year+'</span>  <br/>'
}

function updateRateBySlider() {
    var rate_val = parseFloat(document.getElementById('rate').value);
    document.getElementById('rate_val').value = rate_val;
}

function updateRateByInput() {
    var rate_val = parseFloat(document.getElementById('rate_val').value);
    document.getElementById('rate_val').value = Math.min(Math.max(1, Math.round(rate_val*4)/4), 20);
    document.getElementById('rate').value = Math.min(Math.max(1, Math.round(rate_val*4)/4), 20);
    return true;
}    
