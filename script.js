function compute(){   
    // Reading values
    let principal = document.getElementById("principal").value;
    let years = document.getElementById("years").value;
    let rate = document.getElementById("rate").value;
    
    // Check if principal field is empty
    if(principal <= 0){
        alert("Please enter a positive number in the investment amount!");
        document.getElementById("principal").focus();
        return;
    }

    // Check if years field is empty
    if(years <= 0){
        alert("Please select a positive number in the amount of years!");
        document.getElementById("years").focus();
        return;
    }

    // **No need to check if rate field is empty, since it has a default value

    // Do the needed calculations
    let interest = principal*years*rate/100;
    let myDate = new Date();
    let thisYear = myDate.getFullYear();
    let futuYear = thisYear + Number(years);
    
    // Display output
    document.getElementById("result1").innerHTML = "If you deposit <mark>" + principal + "</mark>,";
    document.getElementById("result2").innerHTML = "at an interest rate of <mark>" + rate + "%</mark>,";
    document.getElementById("result3").innerHTML = "You will receive an amount of <mark>" + interest + "</mark>,";
    document.getElementById("result4").innerHTML = "in the year <mark>" + futuYear + "</mark>.";
}

// Updates numerical mark next to the rate range input
function updRate(){
    let currRate = document.getElementById("rate").value;
    document.getElementById("slidVal").innerHTML = currRate + "%";
}
