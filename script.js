function compute() {    
    var principal = document.getElementById("principal");
    if(principal.value <= 0){
            alert("Please Enter a Positive Number!");
            principal.focus();
            return false;
    } else
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML="If you deposit <strong>"+principal+"</strong>,<br>at an interest rate of <strong>"+rate+"%</strong>.<br>You will receive an amount of <strong>"+interest+"</strong>,<br>In the year <strong>"+year+"</strong>.<br>";
}
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}