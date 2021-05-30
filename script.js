function compute()
{
    // set variables
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var year = new Date().getFullYear()+parseInt(years);
    var amount = principal * years * rate /100;

   // validation for "Principal" and "Year"
    var validate = validateFunction(year, principal);  

    //IF validate is true, continue
    if(validate){
        // Get the reference to the element named 'result' and upadte when "Compute Interest" is clicked
        document.getElementById("result").innerHTML="If you deposit "
            +"<span class='highlightedNumbers'>"+principal+ "</span>,\<br\>at an interest rate of "
            +"<span class='highlightedNumbers'>"+rate+"%</span>. \<br\>You will receive an amount of "
            +"<span class='highlightedNumbers'>"+amount+"</span>,\<br\>in the year "
            +"<span class='highlightedNumbers'>"+year+"</span> \<br\>";
    }
}
        
function updateRate() 
{
    // set Span rate_val
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}

function validateFunction(year, principal) {
    // function to validate year
    if ((isNaN(year)) || (principal <= 0)) {
        if (isNaN(year)) {
            alert('the year Not a Number!');
            document.getElementById("years").focus();
        } 
        if (principal <= 0) {
            alert('Enter a positive number');
            document.getElementById("principal").focus();
        }
        return false;
    } else {
        return true;
    }
}
