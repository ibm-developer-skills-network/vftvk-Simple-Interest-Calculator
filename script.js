function compute()
{
    // set variables
    var principalValidate = false;
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);

    // Call validateDate
    validateDate(year);

    //validation for "Principal"
    validationPrincipal(principal);

    //IF principalValidate is true, continue
    if(principalValidate){
        // Get the reference to the element named 'result' and upadte when "Compute Interest" is clicked
        document.getElementById("result").innerHTML="If you deposit "
            +principal+",\<br\>at an interest rate of "
            +rate+"%\<br\>You will receive an amount of "
            +amount+",\<br\>in the year "
            +year+"\<br\>";
    }
}
        
function updateRate() 
{
    // set Span rate_val
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

function validateDate(date) {
    // RegEx to validate Date
    var regEx = /^((((0?[1-9]|[12]\d|3[01])[\.\-\/](0?[13578]|1[02])      [\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|((0?[1-9]|[12]\d|30)[\.\-\/](0?[13456789]|1[012])[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|((0?[1-9]|1\d|2[0-8])[\.\-\/]0?2[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|(29[\.\-\/]0?2[\.\-\/]((1[6-9]|[2-9]\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)|00)))|(((0[1-9]|[12]\d|3[01])(0[13578]|1[02])((1[6-9]|[2-9]\d)?\d{2}))|((0[1-9]|[12]\d|30)(0[13456789]|1[012])((1[6-9]|[2-9]\d)?\d{2}))|((0[1-9]|1\d|2[0-8])02((1[6-9]|[2-9]\d)?\d{2}))|(2902((1[6-9]|[2-9]\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)|00))))$/;
    if (!(date.match(regEx))) {
        alert('Invalid date!');
    }
}

function validationPrincipal(principal){
    // validation for "Principal"
    if (principal <= 0) {
        alert('Enter a positive number');
        principalValidate = false;
    } else {
        principalValidate = true;
    }
}