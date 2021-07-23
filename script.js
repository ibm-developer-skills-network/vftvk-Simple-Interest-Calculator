function compute(){
    amount = document.getElementById("amount").value;
    rate = document.getElementById("rate").value;
    year = document.getElementById("year").value;

    console.log('amount: ' + amount);
    console.log('rate: ' + rate);
    console.log('year: ' + year);

    //Check if amount field is empty
    if(amount == ""){
        alert("Please enter the amount");
        document.getElementById("amount").focus();
        return false;
    }
    //Check if rate field is empty
    if(rate == ""){
        alert("Please enter the rate");
        document.getElementById("rate").focus();
        return false;
    }
    //Check if year field is empty
    if(year == ""){
        alert("Please enter the year");
        document.getElementById("year").focus();
        return false;
    }

    var receive = amount * (rate/100) * year;

    var message_result = document.getElementById('message_result');
    message_result.innerHTML = receive.toFixed(2);

    var message_amount = document.getElementById('message_amount');
    message_amount.innerHTML = amount;

    var message_rate = document.getElementById('message_rate');
    message_rate.innerHTML = rate + '%';

    var message_interest_rate = document.getElementById('message_interest_rate');
    message_interest_rate.innerHTML = year;

    var boxDisplay = document.getElementById("boxDisplay");
    boxDisplay.classList.remove("display_none");
    boxDisplay.classList.add("display_block");
}

function showVal(value_range){
    var message_percent = document.getElementById('message_percent');

    message_percent.innerHTML = value_range + '%';
    console.log('value_range: ' + value_range);
}