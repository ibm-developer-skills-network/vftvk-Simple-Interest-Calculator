var principal = document.getElementById("principal").value;


function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval+('%');
}


function validate()
{

    var principal = document.getElementById("principal").value;

    if(isNaN(principal)){
        alert("Only Numeric Inputs are allowed");
        document.getElementById("principal").focus()
        return false;
        
    }


    else if(principal <= 0){
        alert("Positive numbers only")
        document.getElementById("principal").focus()
        return false;
    }
    else {return true;}
}

    


function compute()
{

    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;

    var years = document.getElementById("years").value;

    var interest = principal*years*rate/100;

    var amount = principal*1+interest*1;


    var year = new Date().getFullYear()+parseInt(years);


    if(principal >= 1){
    document.getElementById("result").innerHTML ="If you deposit "+principal+"\<br\> at an interest rate of "+rate+"% \<br\>You will recieve an ineterst of "+interest+",\<br\> in the year "+year
    return true;
    }
    else {
        alert("Invalid value in the amount field")
        return false;
    }
    
}
        
