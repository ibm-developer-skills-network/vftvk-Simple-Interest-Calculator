function compute()
{
    //var p = document.getElementById("principal").value;

    var principal = document.getElementById("principal").value;

    if(principal<=0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
    else{
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate/100;
        var year = new Date().getFullYear()+parseInt(years);
    
    document.getElementById("result").innerHTML="\<mark\>\<br\>If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>\</mark\>";
    }
    

}

function updateRate(){
    var rateval = document.getElementById("rate").value; 
    document.getElementById("rate_val").innerText=rateval;    

}
    
