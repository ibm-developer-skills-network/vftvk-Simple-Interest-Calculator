function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    y = document.getElementById("years").value;
    r = p * r/100 * y
    document.getElementById('result').innerHTML = r;
    
}
        
