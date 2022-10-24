function compute(){
   var principal = document.getElementById("principal").value;
   var rate = document.getElementById("rate").value;
   var years = document.getElementById("years").value;
   var interest = principal * years * rate /100;
   var year = new Date().getFullYear()+parseInt(years);
    if(principal <= 0){
        alert("Enter a positive number");
    }
    else{
        document.getElementById("principalResult").innerText=principal;
        document.getElementById("rateResult").innerText=rate;
        document.getElementById("yearsResult").innerText=year;
        document.getElementById("result").innerText=interest;
    } 
}
function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}