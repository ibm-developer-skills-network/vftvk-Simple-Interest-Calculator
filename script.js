//Changed by Liam Callahan 2022
function compute()
{
    if (document.getElementById("principal").value <= 0) {
        alert("Enter a positive number.");
        document.getElementById("principal").focus();
    }else{
    var priciple = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = priciple * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML = "<br>If you deposit <span id=\"result_num\">"+priciple+"</span>,<br> at an interest rate of <span id=\"result_num\">"+rate+"%</span>.<br>You will receive an amount of <span id=\"result_num\">"+interest+"</span>,<br>in the year <span id=\"result_num\">"+year+"</span>";
    }
    
}
function updateRate() {
    document.getElementById("rate_val").innerHTML = document.getElementById("rate").value+"%";
}