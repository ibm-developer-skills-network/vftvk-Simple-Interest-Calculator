function compute()
{
    p = document.getElementById("principal").value;
    n = document.getElementById("rate").value;
    r = document.getElementById("years").value;
    result = document.getElementById("result");
                
    result.innerHTML = "The interest is " + (p*n*r/100);
    
    
}
        
