// Simple Interest Calculator Javascript

function compute()
{
    // Set default values
    var rate = 0.0;
    
    // Support finanical formatting
    var sFin = {style: "currency", currency: "CAD"}

    /* Get input values */
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseInt(document.getElementById("years").value);


    /* Validate principal amount */ 
    if (principal > 0)  {
         /* Calculate Interest */
        var interest = principal * years * rate /100;
        var ppint = principal + interest; // Principal plus interest

        /* Determine calculation end year */
        var year = new Date().getFullYear() + parseInt(years);
        
        /* Create result string and display it */
        var resultstr =  "<br><br>If you deposit <mark>" + principal.toLocaleString("en-CA", sFin) + "<\/mark>,<br>";
            resultstr += "at an interest rate of <mark>" + rate + "<\/mark>%.<br>";
            resultstr += "You will receive an amount of <mark>" + ppint.toLocaleString("en-CA", sFin) + "<\/mark>,<br>"; 
            resultstr += "in the year <mark>" + year + "<\/mark>.";
         document.getElementById("result").innerHTML = resultstr; 
    }
    else {
        /* Display error message and reset for new data entry */
        alert("Enter a positive number");
        document.getElementById("result").innerHTML = "";
        document.getElementById("principal").value = "";
        document.getElementById("principal").focus();
    }
}

/* UI enhancement to improve usability
of the calculator */
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}

