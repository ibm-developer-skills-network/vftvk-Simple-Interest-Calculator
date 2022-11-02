function compute()
{
    p = document.getElementById("principal").value;
    q = document.getElementById("rate").value;
    r = document.getElementById("years").value;
    a = document.getElementById("results");
    
    a.innerHTML = "The interest is " + (p*n*r/100);
}
        
