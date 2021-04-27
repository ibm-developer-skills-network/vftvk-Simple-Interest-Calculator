function updateRate() {
    // refresh rate when range is changed
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + '%';
}

function compute() {
    var principal = document.getElementById("principal").value;

    // check if the ammount is valid
    if(principal <= 0) 
    {
        alert("Please enter a positive number");
        document.getElementById("principal").focus();
        return;
    }

    // calculate interest
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var amount = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);

    // show result
    document.getElementById("result").innerHTML="If you deposit <b>"+principal+"</b>,\<br\>at an interest rate of <b>"+rate+"</b>.\<br\>You will receive an amount of <b>"+amount+"</b>,\<br\>in the year <b>"+year+"</b>\<br\>"
}

