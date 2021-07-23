function compute(){
    amount = document.getElementById("amount").value;
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;

    //Check if amount field is empty
    if(amount == ""){
        alert("Please enter the amount");
        document.getElementById("amount").focus();
        return false;
    }
    if(parseInt(amount) < 1){
        alert("Enter a positive number");
        document.getElementById("amount").focus();
        return false;
    }
    //Check if rate field is empty
    if(rate == ""){
        alert("Please enter the rate");
        document.getElementById("rate").focus();
        return false;
    }
    //Check if years field is empty
    if(years == ""){
        alert("Please enter the years");
        document.getElementById("years").focus();
        return false;
    }

    var receive = amount * (rate/100) * years;

    var message_result = document.getElementById('message_result');
    message_result.innerHTML = receive.toFixed(2);

    var message_amount = document.getElementById('message_amount');
    message_amount.innerHTML = amount;

    var message_rate = document.getElementById('message_rate');
    message_rate.innerHTML = rate + '%';

    var message_interest_rate = document.getElementById('message_interest_rate');
    message_interest_rate.innerHTML = years;

    var boxDisplay = document.getElementById("boxDisplay");
    boxDisplay.classList.remove("display_none");
    boxDisplay.classList.add("display_block");
}

function showVal(value_range){
    var rate_val = document.getElementById('rate_val');

    rate_val.innerHTML = value_range + '%';
}