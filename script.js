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
    var l = document.createElement("p")
    var t = document.createTextNode("If you deposit ");
    l.appendChild(t)
    
    var n = document.createElement("mark")
    var tx = document.createTextNode("1000000");  
    n.appendChild(tx);
    l.appendChild(n)
    document.getElementById("result").appendChild(l);


    var p = document.getElementById("principal").value;
    l = document.createElement("p")
    t = document.createTextNode("You will recieve an amount of ");
    l.appendChild(t)
    n = document.createElement("mark")
    tx = document.createTextNode(p);  
    n.appendChild(tx);
    l.appendChild(n)
    document.getElementById("result").appendChild(l);
   
}
        