const init = () => {
    const resultsText = document.getElementById('compute-results');
    resultsText.textContent = ``;
    resultsText.style.display = "none"
}

const compute = () => {
    const principal_val = document.getElementById('principal').value;
    const rate_val = document.getElementById("rate").value;
    const year_select = document.getElementById("dropdown_val");
    const years_val = year_select.getAttribute("data-value");
    document.getElementById('error-principal').textContent = ``;
    document.getElementById('compute-results').textContent = ``;

    if (principal_val < 0) {
        document.getElementById('error-principal').textContent = `Invalid value.  \"Amount\" must be greater than 0`;
    } else {
        const year = new Date().getFullYear()+parseInt(years_val);
        const calc = calcIntrest(principal_val, rate_val, years_val)
        document.getElementById('compute-results').style.display = "block"
        document.getElementById('compute-results').textContent = `
            If you deposit ${principal_val}, at an interest rate of ${rate_val}%, you will
            recieve an amount of $${calc.toFixed(2)} in the year ${year}`
    }
};

const calcIntrest = (principal, ir, yrs) => {
    return principal * ir * yrs / 100
};

const reset = () => {
    const resultsText = document.getElementById('compute-results');
    document.getElementById('error-principal').textContent = ``;
    resultsText.textContent = ``;
    resultsText.style.display = "none";
    document.getElementById('compute')
    document.getElementById('principal').value = '';
    document.getElementById('slider-input-box').value = '0';
    document.getElementById('slide-thumb').style.left = '0%';
    document.getElementById('slide-filled').style.transform = 'translate(0%, -50%) scaleX(0)';
    document.getElementById('example-ap3t91wclrj-value').innerHTML = '';
    document.getElementById('dropdown_val').setAttribute('data-value', '');
    const dropdownOptions = document.getElementById('example-ap3t91wclrj-menu').children;
    for (i = 0; i < c.length; i++) {
        dropdownOptions[i].setAttribute('class', 'bx--dropdown-item');
    }
};

init();