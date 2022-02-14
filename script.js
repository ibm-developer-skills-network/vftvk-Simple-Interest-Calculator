function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
    var result = document.getElementById("result");

    //Check for 0 & negative number input
    if (principal <= "0") {
        alert('Please enter a positive number!');
        document.getElementById("principal").focus();

    // Display the result if input is a positive integer    
    } else {
        result.innerHTML = '\<br\>' + 'If you deposit ' + '<mark>' + principal + '</mark>' + ',' + '\<br\>'
            + 'at an interest rate of ' + '<mark>' + rate + '%' + '</mark>' + ',' + '\<br\>'
            + 'You will receive an amount of ' + '<mark>' + interest + '</mark>' + ',' + '\<br\>'
            + 'in the year ' + '<mark>' + year + '</mark>'
    }
}
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + '%';
        
