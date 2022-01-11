function compute()
{
    let p = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;
    let interest = p * years * rate /100;
    let year = new Date().getFullYear()+parseInt(years);
    let result = document.getElementById("result")
    if (p <= 0) {
        document.getElementById("principal").value = "";
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    } else {
        result.innerHTML = `
        If you deposit <span style="background-color: yellow;">${p}</span>,<br/>
        at an interest rate of <span style="background-color: yellow;">${rate}%</span>.<br/>
        You will receive an amount of <span style="background-color: yellow;">${interest}</span>,<br/>
        in the year <span style="background-color: yellow;">${year}</span>
        `    
    };
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

