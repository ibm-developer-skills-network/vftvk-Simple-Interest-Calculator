var slider = document.getElementById("rate");
var output = document.getElementById("ratenumber");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}


function compute()
{
    p = document.getElementById("principal").value;
    
}


        