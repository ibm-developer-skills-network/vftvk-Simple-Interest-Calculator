




function compute(){
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value
    var amount=principal * years * rate /100;

    var year = new Date().getFullYear()+parseInt(years);

    document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>"
}

function validateInput(){
  x=document.getElementById("principal").value;

  // if principal is zero or negative value
  if(x<1||x==0){
      alert("Enter a positive number");
      document.getElementById("principal").focus();

    
    }
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
