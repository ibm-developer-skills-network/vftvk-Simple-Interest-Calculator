function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate-val").innerText=rateval;
}
function validate(event) {
  // Alerts user on invalid input
  if (!event.target.validity.valid) {
    alert("Enter a positive principal amount.");
    event.target.value = "";
    event.target.focus();
  }
}

function compute() {
  // Compute interest on principal and display result
  
  const principalElem = document.getElementById("principal");
  const validPrincipal = principalElem.checkValidity() && principalElem.value;
  let result = "";

  // Only show results with valid principal value
  if (validPrincipal) {
    const principal = document.getElementById("principal").value;
    const rate = document.getElementById("rate").value;
    const years = document.getElementById("years").value;
    let interest = (principal * years * rate) / 100;
    // Round displayed interest to 2 decimal places
    interest = +(Math.round(interest + "e+2") + "e-2");
    const year = new Date().getFullYear() + parseInt(years);

    result = `If you deposit <mark>${principal}</mark>,
    <br>
    at an interest rate of <mark>${rate}%</mark>.
    <br>
    You will receive an amount of <mark>${interest}</mark>,
    <br>
    in the year <mark>${year}</mark>`;
  } else {
    alert("Enter a positive principal amount.");
    principal.focus();
  }

  document.getElementById("result").innerHTML = result;
}
