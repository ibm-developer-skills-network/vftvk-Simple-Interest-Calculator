function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    t = document.getElementById("years").value;
    var SI = p*r*t;
    document.getElementById("result").innerHTML = p;
    
}
        
