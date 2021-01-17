document.addEventListener('DOMContentLoaded', () => {

    document.querySelector("#compute").addEventListener("click", () => {
        
        var principal = document.querySelector("#principal").value;
        if (int(principal) <= 0) {
            alert("Enter a positive number");
            document.querySelector("#principal").focus();
        }

        var rate = float(document.querySelector("#rate").value);
        var years = int(document.querySelector("#years").value);
        

        var interest = principal * rate * years / 100;
        var year = 2020 + years;
        var result = 'If you deposit' + principal + ', at an interest rate of ' + rate + '%. You will receive an amount of ' + interest + ', in the year ' + year;
        document.querySelector('#result').innerhtml = result;
        
    });

    document.querySelector("#rate").addEventListener("input", () => {
        var val = document.querySelector('#rate').value;
        document.querySelector('#int_val').innerhtml = val + '%';
    });
});