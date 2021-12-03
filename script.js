function display()
{
    document.getElementById("range").textContent=document.getElementById("rate").value;
    console.log(document.getElementById("rate").value)
}

function compute()
{
    amount = parseInt(document.getElementById("amount").value);
    rate = parseInt(document.getElementById("rate").value);
    years = parseInt(document.getElementById("years").value);
    currentyear = parseInt(new Date().getFullYear())
    
    document.getElementById("startamount").innerHTML = amount
    document.getElementById("intrate").innerHTML = rate
    endresult = amount + amount * rate/100 * years
    console.log(endresult)
    document.getElementById("endresult").innerHTML = endresult;
    document.getElementById("endyear").innerHTML = currentyear + years;
    document.getElementById("resulttext").style.display = "inline"
}
