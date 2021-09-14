// JavaScript
function calculate()
{

     amount= document.getElementById("principal").value;
    rate = document.getElementById("rate").value;
     time = document.getElementById("years").value;
    interest = document.getElementById("result");
    result.innerHTML="The interest is " + (amount*time*rate/100);

}

function myFunction() {
    document.getElementById("myForm").reset();
}
