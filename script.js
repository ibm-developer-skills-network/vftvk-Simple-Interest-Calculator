function compute() {
  var principal = +document.getElementById('principal').value || 0;
  var rate = document.getElementById('rate').value;
  var years = document.getElementById('years').value;
  if (principal <= 0) {
    alert('Please enter positve principal amount.');
    document.getElementById('principal').focus();
    return;
  }

  var interest = (principal * years * rate) / 100;
  var amount = principal + interest;
  var year = new Date().getFullYear() + parseInt(years);
  var result = document.getElementById('result');
  result.innerHTML = `If you deposit ${principal} <br>
        at an interest rate of ${rate}% <br>
        You will receive an amount of ${amount} <br>
        in the year ${year}<br>`;
}

function updateRate() {
  var rateval = document.getElementById('rate').value;
  document.getElementById('rate_val').innerText = rateval;
