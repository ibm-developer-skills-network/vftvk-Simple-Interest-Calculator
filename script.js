 function compute(){
 p = document.getElementById("principal").value;

    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year =  year.getFullYear()+parseInt(years);
 }

     document.getElementById("result").innerHTML = "interest";