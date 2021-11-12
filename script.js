function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    y = document.getElementById("years").value;
    re = document.getElementById("result");
    i = parseFloat(p)*parseFloat(r)*parseFloat(y)
    re.innerHTML = i
    
    
}
        
