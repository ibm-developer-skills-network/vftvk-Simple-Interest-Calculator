var slider = window.document.getElementById("rate");
var output = window.document.getElementById("ratenumber");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    y = document.getElementById("years").value; 
    alert(p + r + y); 
}
