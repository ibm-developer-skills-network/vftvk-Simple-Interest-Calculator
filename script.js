function compute() {
  // values
  const principal = parseInt(document.getElementById("principal").value);
  const rate = parseFloat(document.getElementById("rate").value);
  const years = parseInt(document.getElementById("years").value);

  // Result DOM element
  const result = document.getElementById("result");

  // Calculations
  const currentYear = new Date().getFullYear();
  const calculatedYear = currentYear + years;
  const calculatedAmount = principal*(rate/100)*years;

  result.innerHTML = `
    <p>
        If you deposit ${principal},<br/>
        at an iterest rate of ${rate}%.<br/>
        You will receive an amount of ${calculatedAmount}.<br/>
        in the year ${calculatedYear}
    </p>
`;

}


window.onload = function () {
  updateRateValue();
}

function updateRateValue() {
  const rate = document.getElementById("rate").value;
  document.getElementById("interestRate").innerHTML = rate + "%";
}