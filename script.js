     
     function setRate()
     {
     this.document.getElementById("rate").min = 1
    this.document.getElementById("rate").max = 20
    this.document.getElementById("rate").step = 0.25
        document.getElementById("rate").value = 10.25
        var rate_init = document.getElementById("rate").value
        document.getElementById("rate_val").innerText=rate_init
        
        }
    function updateRate() 
    {  
        this.rateval = document.getElementById("rate").value
        document.getElementById("rate_val").innerText=rateval
    }
   
function principalValidate()
   {if (document.getElementById("principal").value < 1) {alert("Enter a positive number");
    document.getElementById("principal").focus()
    return (false)
    }
    else return(true)
}
    function compute()
    {
    if (principalValidate()===true){
    
        var principal = document.getElementById("principal").value;
        var years = document.getElementById("years").value;
        var rate = document.getElementById("rate").value
        var interest = (principal * years * rate) /100
        var year = new Date().getFullYear()+parseInt(years);
        document.getElementById("result").innerHTML="If you deposit \<mark class=\"mark_compute\"\>"+principal+"\</mark\>,\<br\>at an interest rate of \<mark class=mark_compute\>"+rate+"%\</mark\>\<br\>You will receive an amount of \<mark class=mark_compute\>"+interest+"\</mark\>,\<br\>in the year \<mark class=mark_compute\>"+year+"\</mark\>\<br\>"
     
    }
      }  
