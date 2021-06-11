function compute() {
    var x = document.getElementById("principal");
    if(x.value == "" || x.value <= 0) {
        alert("Enter a positive number");
        return false;//validates the principal/Amount is positive number
    } else {
        var principal = document.getElementById("principal").value;
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var year1 = new Date();
        var years2 =  year1.getFullYear() + parseInt(years);
        var amount = (principal * rate * years) / 100;
        document.getElementById("result").innerHTML = "<br>If you deposit " +
        "<span class='colors'>" + principal + "</span>" +
        "<br>at an interest rate of " + "<span class='colors'>" + rate + "</span>" + "%" +
        "<br>You will recieve an amount of "+ "<span class='colors'>" + amount + "</span>" + 
        "<br>in the year " + "<span class='colors'>" + years2 + "</span>";// calculates interest
    }
}//Main function that is executed after pressing compute interest

function updateRate() {
    var rangeslider = document.getElementById("rate");
    var output = document.getElementById("rate_val");
    output.innerHTML = rangeslider.value;
}//Interest rate is updated
