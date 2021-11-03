
function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    n = document.getElementById("years").value;
    i = (p*r*n)/100;

     dateNow = new Date();
     yearNow = parseInt(dateNow.getFullYear()) + parseInt(n);
    
    resultDisplay = document.getElementById("result");
    resultDisplay.innerHTML = "If you deposit " + "$<span class='highlight'>" + p + "</span>"  + ", <br> at an interest rate of " + "<span class='highlight'>" + r + "%</span>." + "<br> You will receive an amount of " + "$<span class='highlight'>" + i + "</span>" + ", <br> in the year " + "<span class='highlight'>" + yearNow + "</span>";
}



function SliderValue()
{

var slider = document.getElementById("rate");
var output = document.getElementById("rate_display");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}
}