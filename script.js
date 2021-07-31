function compute()
{
    // Decalre all variables to be used

    //variables inputted by user
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years");

    //Calculation of interest
    var interest = principal*years*rate/100;
    
    //Date determination based on user inputted No. of years
    var year = new Date().getFullYear()+parseInt(years);

    //Modify compute interest text
    document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>"

}

//obtain the rate from the range bar and insert into the element
function updateRate() 
{
    var rateval = document.getElementById("rate").value;

    //insert the new rate into the html tag
    document.getElementById("rate_val").innerText=rateval+"%";

}