function compute()
{
    // Set Values
    amount = document.getElementById("principle").value;
    rate = document.getElementById("rate").value;
    
    //parse to int
    year = parseInt(document.getElementById("years").value);
    
    // Input validation
    if (amount == ""){
        alert("Please input amount!");
    }
    else{
        //Set string
        amount_str = "If you deposit ";
        rate_str = "at an interest rate of ";
        interest_str = "You will receive an amount of ";
        year_str = "in the year "

        //Year automation
        date = new Date().getFullYear() + year;

        //Calculate interest
        interest =  amount * rate * year / 100;
        
        // Output
        document.getElementById("result").innerHTML = amount_str + amount + "<br/>"
        + rate_str + rate + "%" + "<br/>"
        + interest_str + interest + "<br/>"
        + year_str + date;
    } 
}

function showValue(){
    rate = document.getElementById("rate");
    
    document.getElementById("percent").innerHTML = rate.value;

}


        