function compute()
{
    p = document.getElementById("principal").value;
    q = document.getElementById("rate").value;
    r = document.getElementById("years").value;
    results = document.getElementById("result");
    
    results.innerHTML = "The interest is " + (p*q*r/100);
}
        
