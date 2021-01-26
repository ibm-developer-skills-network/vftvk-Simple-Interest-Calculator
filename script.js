function compute() {
    let principal = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;
    let interest = principal * years * rate / 100;
    let d = new Date().getFullYear();
    if (principal < 1) {
        window.alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
    else {
        let new_year = parseInt(d) + parseInt(years);
        document.getElementById("result").innerHTML =`If you deposit <mark>${principal}</mark>,<br/>at an interest rate of <mark>${rate}</mark>,<br/>You will receive an amount of <mark>${interest}</mark>,<br/>in the year <mark>${new_year}</mark>`;
    }
}

function show_value(value) {
    document.getElementById("slider").innerHTML = value.toString() + "%";
}
