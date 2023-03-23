function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    y= document.getElementById("years").value;


        var rr =  r/100;
    var r= p * rr * y;
    alert("The interest is "+r); 
  
  
    
}
        