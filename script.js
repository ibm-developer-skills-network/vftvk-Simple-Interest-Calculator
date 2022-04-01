function compute()
{   
    var principal = document.getElementById("principal").value;
    if (verifyPrincipal()==true) {

        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate /100;
        var year = new Date().getFullYear()+parseInt(years);
        var total = parseFloat(interest) + parseFloat(principal);
        console.log(principal);
        console.log(interest);

        var result = document.getElementById("result");
        var r = "If you deposit ".concat(principal);
        r = r.concat(",<br> at an interest rate of ").concat(rate);
        r = r.concat("%.<br> You will receive an amount of ").concat(total);
        r = r.concat(",<br> in the year ").concat(year).concat('.<br>');

        result.innerHTML = r;
    }
}
        
function updateRate()
{
    var rateval = document.getElementById('rate').value;
    document.getElementById('rate_val').innerText=rateval+"%";
}

function verifyPrincipal()
{
    var principal = document.getElementById("principal");
    if (principal.value<=0) {
        alert("Enter a positive number");
        principal.focus();
        return false;
    }
    return true;
}