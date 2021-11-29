function compute()
{
    // Set Values
    amount = document.getElementById("principal").value;
    rate = document.getElementById("rate").value;
    year = document.getElementById("years").value;

    //Set string
    amount_str = "If you deposit ";
    rate_str = "at an interest rate of ";
    interest_str = "You will receive an amount of ";
    year_str = "in the year 2025"

    //Calculate interest
    interest =  amount * rate * year / 100;
    
    // Output
    document.getElementById("result").innerHTML = amount_str + amount + "<br/>"
     + rate_str + rate + "<br/>"
     + interest_str + interest + "<br/>"
     + year_str;

    console.log(interest);
}

function showValue(){
    rate = document.getElementById("rate");
    
    document.getElementById("percent").innerHTML = rate.value;

}
        