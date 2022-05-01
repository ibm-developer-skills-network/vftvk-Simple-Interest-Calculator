function compute() {
  var principal = document.getElementById("principal").value;
  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;
  if (principal == "") {
    alert("El valor no puede estar vacío");
    document.getElementById("principal").focus();
    return false;
  } else {
    if (principal <= 0) {
      alert("Ingresa un numero positivo");
      document.getElementById("principal").focus();
      return false;
    }
  }

  var anos = new Date().getFullYear();
  var future = parseint(anos,10) + parseInt(years,10);

  var interest = principal * rate * years / 100;
  var result = "Si depositas" + principal + "en un interes de" + rate + "tu recibiras la suma de " + interest + "in the year " + future;
  document.getElementById("result").innerHTML=result;
}



function updateRate() {
  var rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = rateval;
  <select onchange="myFunction()"></select>;
}
