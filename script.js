function UpdateRate() {
    document.getElementById("rate_val").innerText = document.getElementById("rate").value+ "%";
}

function PopulateYears() {
    var years = document.getElementById("years");
    for (var i = 1; i < 11; i++) {
        var child = document.createElement("option");
        child.innerText = i; child.setAttribute("value", i);
        years.appendChild(child);
    }
}
window.onload = PopulateYears;

function Compute() {
    var principal = document.getElementById("principal");
    if ( parseFloat(principal.value) < 1.0 ) {
        alert("Enter a positive number!"); 
        document.getElementById("principal").focus;
        return;
    }
    else {
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal.value * years * rate /100;
        var amount = parseFloat(principal.value) + parseFloat(interest);
        var year = new Date().getFullYear()+parseInt(years);
        document.getElementById("result").innerHTML = "If you deposit <b style='background-color: yellow;'>"+principal.value+"</b>, <br>at an interest rate of <b style='background-color: yellow;'>"+rate+"</b>%, <br>You will receive <b style='background-color: yellow;'>"+interest+"</b><br> in the year <b style='background-color: yellow;'>"+year+"</b>.";
    }    
}
        
