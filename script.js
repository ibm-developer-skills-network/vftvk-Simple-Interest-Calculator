var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;
var interest = principal * years * rate /100;
var year = new Date().getFullYear()+parseInt(years);

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
function compute()
{
    var p = document.getElementById("principal").value;
    var n = document.createElement("p")
    var tx = document.createTextNode(""+p);  
    n.appendChild(tx);
    //n.innerText = p;
    document.getElementById("result").appendChild(n);
}
        