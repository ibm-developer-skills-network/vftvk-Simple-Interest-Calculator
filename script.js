
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}

function compute()
{
    var amount = document.getElementById("amount").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    
    var interest = amount * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    
    document.getElementById("result").innerHTML= "<p>If you deposit "+ amount + "<br></br>at an interest rate of " + rate + "% <br></br>You will receive an amount of " + interest + "<br></br>In the year " + year + "<br></br></p>";
   
    console.log("Hi")
}

function checkData(){
    //Create references to the input elements we wish to validate
    var amount = document.getElementById("amount")
    
    //Check if amount field is empty
    if(amount.value==""){
        alert("Please enter amount");
        amount.focus();
        return false;
    }
    //Check if amount value is positive
    if(amount.value < 1){
        alert("Please enter a positive amount");
        amount.focus();
        return false;
    }
    
    compute();
    return true;
}