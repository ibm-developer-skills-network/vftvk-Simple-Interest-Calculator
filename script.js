const compute = () => {
    const principal_val = document.getElementById('principal').value;
    const rate_val = document.getElementById("rate").value;
    const year_select = document.getElementById("dropdown_val");
    const year_val = year_select.getAttribute("data-value");
    console.log(`PRINCIPAL:  `, principal_val);
    console.log(`INTEREST RATE:  ${rate_val}`);
    console.log(`YEAR:  ${year_val}`);
};

const reset = () => {
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