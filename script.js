const compute = () => {
    const principal_val = document.getElementById('principal').value;
    const rate_val = document.getElementById("rate").value;
    const year_select = document.getElementById("dropdown_val");
    const years_val = year_select.getAttribute("data-value");
    console.log(`PRINCIPAL:  `, principal_val);
    console.log(`INTEREST RATE:  ${rate_val}`);
    console.log(`YEAR:  ${years_val}`);
    document.getElementById('error-principal').textContent = ``;
    document.getElementById('compute-results').textContent = ``;

    if (principal_val < 0) {
        // document.getElementById('principal').appendChild(`
        //     <svg focusable="false" preserveAspectRatio="xMidYMid meet" style="will-change: transform;" xmlns="http://www.w3.org/2000/svg" class="bx--number__invalid" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8,1C4.2,1,1,4.2,1,8s3.2,7,7,7s7-3.1,7-7S11.9,1,8,1z M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2	c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z"></path><path d="M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8	c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z" data-icon-path="inner-path" opacity="0"></path></svg>
        //     `);
        // document.getElementById('num-item').setAttribute('class', 'data-invalid data-numberinput class=');
        // const errPrincipal = document.createElement('div');
        // errPrincipal.setAttribute('id', 'error-principal');
        // errPrincipal.setAttribute('class', 'bx--form-requirement');
        document.getElementById('error-principal').textContent = `Invalid value.  \"Amount\" must be greater than 0`;
        // errPrincipal.textContent = `Invalid value.  \"Amount\" must be greater than 0`;
        // document.getElementById('num-input').appendChild(errPrincipal);
    } else {
        const year = new Date().getFullYear()+parseInt(years_val);
        const calc = calcIntrest(principal_val, rate_val, years_val)
        console.log(`CALCULATION RESULT:  `, calc)
        document.getElementById('compute-results').textContent = `
            If you deposit ${principal_val}, at an interest rate of ${rate_val}%, you will
            recieve an amount of $${calc.toFixed(2)} in the year ${year}`
    }

};

const calcIntrest = (principal, ir, yrs) => {
    return principal * ir * yrs / 100
};

const reset = () => {
    document.getElementById('error-principal').textContent = ``;
    document.getElementById('compute-results').textContent = ``;
    document.getElementById('principal').value = '';
    document.getElementById('slider-input-box').value = '0';
    document.getElementById('slide-thumb').style.left = '0%';
    document.getElementById('slide-filled').style.transform = 'translate(0%, -50%) scaleX(0)';
    document.getElementById('example-ap3t91wclrj-value').innerHTML = '';
    document.getElementById('dropdown_val').setAttribute('data-value', '');
    const c = document.getElementById('example-ap3t91wclrj-menu').children;
    for (i = 0; i < c.length; i++) {
        c[i].setAttribute('class', 'bx--dropdown-item');
    }
};