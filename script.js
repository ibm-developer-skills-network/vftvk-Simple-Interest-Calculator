// this funciton allows update of rate value on user interface as this changes
function updateRate() {
    // get element to show rate value
    const rate_val = document.getElementById("rate_val");
    // get rate value
    const rate = document.getElementById("rate").value;
    // assign rate value to element 
    rate_val.innerHTML = rate + "%";
}

// this function computes the amount earn and shows a general overview of the result
function compute() {
    // get the amount entered by the user
    const principal = document.getElementById("principal").value;
    // check whether user entered a valid value for principal
    if (principal <= 0) {
        // show the user a message to indicate the correct value
        alert("Enter positive number");
        // once user clicks ok focus on principal input 
        document.getElementById("principal").focus();
    }
    else {
        // if principal value is corect lets ...
        // get rate value chosen by user
        const rate = document.getElementById("rate").value;
        // get number of years chosen by user
        var years = document.getElementById("years").value;
        // calculate earned interest  
        const interest = principal * years * rate / 100
        // calculate the year at which the interest will be arned
        var year = new Date().getFullYear() + parseInt(years);
        // get element to show result
        const result = document.getElementById("result")
        // update value of element to show result
        result.innerHTML = "If you deposit " + principal +
         ",\<br\> at an interest rate of "+
         rate + "%\<br\> You will receive an amount of "+ interest 
         + ",\<br\>in the year " + year + "\<br\>";
    }

}




