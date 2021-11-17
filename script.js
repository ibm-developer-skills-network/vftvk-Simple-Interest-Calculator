function compute() {
  // skipping the value method on this since other methods are needed like focus(). value method is called below on demand.  
  var principal = document.getElementById("principal");
  if (principal.value < 1){
    alert("Enter a positive number");
    principal.focus();
    return;
  }
  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;
  var interest = principal.value * years * rate/100;
  var year = new Date().getFullYear() + parseInt(years);
  //document.getElementById("result").innerHTML="If you deposit "+principal.value+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>"
  document.getElementById("result").innerHTML="If you deposit "+"\<span class=\"yellow_bkg\"\>"+principal.value+"\</span\>"+",\<br\>at an interest rate of "+"\<span class=\"yellow_bkg\"\>"+rate+"\</span\>"+"%\<br\>You will receive an amount of "+"\<span class=\"yellow_bkg\"\>"+interest+"\</span\>"+",\<br\>in the year "+"\<span class=\"yellow_bkg\"\>"+year+"\</span\>"+"\<br\>"
}
function updateRate(){
  var rateval = document.getElementById("rate").value + '%';
  document.getElementById("rate_val").innerText = rateval;
}
