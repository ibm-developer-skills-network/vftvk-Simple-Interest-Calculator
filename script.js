//validation function
function checkdata() {
    //reference to input element to be validated
    var principal = document.getElementById("principal");

    //Check if username field is empty
    if (principal.value <= 0) {
        alert("Enter a positive number");
        principal.focus();
        return false;
    }

}


//calculate result
function compute() {
    // get html input values
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById('years').value;

    //calculate interest
    var interest = principal * years * rate / 100;

    //calculate total amount
    var amount = principal + interest;

    //calculate actual year
    var year = new Date().getFullYear() + parseInt(years);


    //set result value
    document.getElementById("result").innerHTML = "If you deposit <mark>" + principal + "</mark>,\<br/> at an interest rate of <mark>" + rate + "%</mark>." + "\<br\> You will recieve an amount of <mark>" + interest + "</mark>,\<br\>in the year <mark>" + year + "</mark>\<br\>";

}

//update slider value
function updateRate() {

    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}
