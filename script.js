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


  Line1 = '<br>If you deposit<mark> ' + principal + '</mark><br>';
  Line2 = ' at an interest rate of <mark>' + rate + '%' + '</mark><br>';
  Line3 = ' you will receive an amount of <mark>' + interest + '</mark><br>';
  Line4 = ' in the year<mark> ' + totalyears + '</mark><br>';

  document.getElementById("result").innerHTML = Line1 + Line2 + Line3 + Line4;
}

function showVal(newVal)
{
    //display value of slider
    document.getElementById("sliderValue").innerHTML=newVal + "%";

}
