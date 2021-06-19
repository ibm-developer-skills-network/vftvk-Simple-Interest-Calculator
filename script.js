function get_interest_rate() {
    var el = document.querySelector('#slider_val');
    var ir_val = (parseFloat(el.value)/0.5).toFixed(2);
    return ir_val;
}

function set_interest_rate() {
    var ir = document.querySelector('#ir_output');
    var val = get_interest_rate();
    ir.innerHTML = val +'%';
    if(! +val){
        ir.style.color='red';
    }
    else {
        ir.style.color='black';
    }
}

var principal = document.querySelector('#principal');
var warning = document.querySelector('#warning');

principal.addEventListener('keyup', function(e){
    if(e.target.value<1) {
        warning.classList.add('visible');
        e.target.style.color = 'red';
    }
    else {
        e.target.style.color = 'black';
        warning.classList.remove('visible');
    }
})

function compute() {
    var amount = principal.value;
    if(amount<1){
        alert('Please enter a positive number');
        principal.focus();
        return;
    }
    var percentage = get_interest_rate();
    var years = Number(document.querySelector('#years').value);
    var estimatedYear = years + new Date().getFullYear();
    var estimatedAmount = amount*percentage*years / 100;
    var result = document.querySelector('#result');
    result.innerHTML = 'If you deposit <mark>' + amount + '</mark>,' + '<br>'
    + 'at an interest rate of <mark>'+ percentage + '</mark>%.' + '<br>'
    + 'You will receive an amount of <mark>'+ estimatedAmount +'</mark>,' + '<br>'
    + 'in the year <mark>' + estimatedYear+'</mark>';
}     
