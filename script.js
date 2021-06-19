function get_interest_rate() {
    var el = document.querySelector('#slider_val')
    var ir_val = (parseFloat(el.value)/0.5).toFixed(2);
    return ir_val;
}

function set_interest_rate() {
    var ir = document.querySelector('#ir_output');
    ir.innerHTML = get_interest_rate() +'%';
}

function compute() {
    var amount = document.querySelector('#principal').value;
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
