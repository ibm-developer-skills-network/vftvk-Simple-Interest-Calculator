// I used arrow function for the sake of good practice

let compute = () => {
    let principal = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;
    let interest = principal * years * rate / 100;
    let year = new Date().getFullYear() + parseInt(years);

    // Validating principal element input
    if (principal <= 0) {
        document.getElementById("principal").focus();
        alert("Enter a positive number");
        return;
    }

    // Result user will see
    document.getElementById("result").innerHTML = "If you deposit " + principal + ",\<br\> at an interest rate of " + rate + "%.\<br\> You will receive an amount of " + interest + ",\<br\> in the year " + year + "\<br\>";
}

// Allowing users to visualize rate
let updateRate = () => {
    let rate = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rate;
}