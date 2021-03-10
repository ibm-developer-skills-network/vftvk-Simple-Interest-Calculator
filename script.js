function compute() {
  var principal = document.getElementById("principal").value;
  if (principal < 1) {
    alert("Enter a positive number");
    document.getElementById("principal").select();
    document.getElementById("principal").focus();
    return;
  }
  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;
  var interest = principal * years * rate / 100
  var currentYear = new Date().getFullYear();
  var totalyears = +currentYear + +years;


  Line1 = '<br>If you deposit ' + principal + '<br>';
  Line2 = ' at an interest rate of ' + rate + '%' + '<br>';
  Line3 = ' you will receive an amount of ' + interest + '<br>';
  Line4 = ' in the year ' + totalyears + '<br>';

  document.getElementById("result").innerHTML = Line1 + Line2 + Line3 + Line4;
}

function showVal(newVal)
{
    //display value of slider
    document.getElementById("sliderValue").innerHTML=newVal;

}
