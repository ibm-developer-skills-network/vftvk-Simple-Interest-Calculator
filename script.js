//Olalekan Otaoroju -- 
// The compute function gets the value of principal, rate and years
// to compute the interest and actual years.
//Finally it passes the result in a template literal when the compute button is clicked.
function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var current_date = new Date();
    var current_year = current_date.getFullYear();
    var actual_year = current_year + parseInt(years);
    show_result();
    validate();
    function show_result() {
        document.getElementById("result").innerHTML = `If you deposit ${principal}, <br>
         at an interest rate  rate of ${rate}. <br>
         You will recieve an amount of ${interest}, <br>
         in the year ${actual_year}`;
    }

    //validate the amount to avoid negative value or zero
    function validate() {
        if (principal <= 0) {
            alert("Ouch! Please enter a positive number");
        }
        
        // focus back on the principal field
        document.getElementById("principal").focus();
    }
}

//The range_val function is created to get the value from the rate slider and dynamically 
//display this value as the slider changes.
function range_val() {
    var rate_value = document.getElementById("rate").value;
    document.getElementById("rate_span").innerHTML = rate_value;
}


