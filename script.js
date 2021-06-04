function compute()
{
    var principal = document.getElementById("principal").value;
    if (principal<=0){
        alert("enter positive number");
        principal.focus();
        return false;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    
    var p=Number(principal);
    var n=Number(years);
    var r=Number(rate);
    var amount=parseFloat(p * n * r /100);
    
    var year = new Date().getFullYear()+n;
     document.getElementById("result").innerHTML="If you deposit "+p+",\<br\>at an interest rate of "+r+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>";
    

    
    

}  
