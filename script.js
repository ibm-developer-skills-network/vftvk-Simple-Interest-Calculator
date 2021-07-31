function compute()
{
    // Decalre all variables to be used

    //variables inputted by user
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;

    //obtain No. of years and parse it into an integer
    var years = parseInt(document.getElementById("years").value);

    //Validate the Principal amount input
    if(principal <= 0) {
        alert('Enter a positive number');
        document.getElementById("principal").focus();
    }
    //After successful validation of positive number run the calculation for simple interest
        else {
        //Calculation of interest
        var interest = principal*years*rate/100;
        
        //Year determination based on user inputted No. of years after todays year
        var year = new Date().getFullYear()+parseInt(years);

        //Modify text to show the data used for the calculation and display years
        document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of $"+interest+",\<br\>in the year "+year+"\<br\>"
        }
    }


//obtain the rate from the range bar and insert into the element
function updateRate() 
{
    //obtain the rate value from the html element
    var rateval = document.getElementById("rate").value;

    //insert the new rate into the html tag
    document.getElementById("rate_val").innerText=rateval+"%";

}