// this function takes in the values from input fields and applies
// simple interest formula to calculate the result and render it 
// innerHTML of 'result' span
function compute()
{
    // principal value from principal input field
    var principal = document.getElementById("principal").value;
    // rate in percentage from the slider
    var rate = document.getElementById("rate").value;
    // years value from "#years" input fiels
    var years = document.getElementById("years").value;

    // interest = PRT/100
    var interest =  principal * years * rate / 100;
    // new Date.getFullYear() returns the current year and we add
    // the input year to calculate resultant year
    var final_year = new Date().getFullYear() + parseInt(years);

    // setting the inner HTML of #result span using
    // template string and markup
    document.getElementById('result').innerHTML = `If you deposit <mark>${principal}</mark>,<br /> at an interest rate of <mark>${rate}%</mark>.<br /> You will receive an amount of <mark>${interest.toFixed(2)}</mark>,<br /> in the year <mark>${final_year}</mark>`;
}

// this fucntion updates slider value when called
function updateSlider()
{
    var rate = document.getElementById("rate").value;
    document.getElementById('slider_value').innerHTML = `${rate}%`;
}

// this function performs form validation of the principal input text
// if principal value is blank or less than equal to zero
// calls alert to enter a valid positive value
function compute_interest()
{
    const principalEl = document.getElementById("principal");
    // principal value as taken from the input field
    var principal = principalEl.value;
    // check if is invalid
    if (Number(principal) <= 0 || principal == "") {
        // call an alert
        alert("Enter a positive number for amount");
        // returns focus to principal input field
        principalEl.focus();
        // returns, does not go further
        return;
    }

    // number is valid and we can call the compute function
    compute();
}
        
