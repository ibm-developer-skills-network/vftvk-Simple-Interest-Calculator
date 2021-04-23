//Check if the Principal value is > 0

function compute(){ 
    //Assign value to the variable
    var principal = document.getElementById('principal').value;
    var rate = document.getElementById('rate').value;
    var years = document.getElementById('years').value;
    //Convert the No of years into the actual year
    result_years = new Date().getFullYear() + Number(years); 
    //Calculate the interest at the end of the period
    result_interest = Number((principal*years*rate)/100);
    //Show the reults
    document.getElementById('result_principal').innerHTML = principal;
    document.getElementById('result_rate').innerHTML = rate;
    document.getElementById('result_years').innerHTML = result_years;
    document.getElementById('result_interest').innerHTML = result_interest;
}

function check()
{
var principal = document.getElementById('principal');

    if (principal.value <= 0){
        alert("Enter a positive number");
        principal.focus();
        return false;
    }
}

function listen ()
{
document.querySelector('button').addEventListener('click', () => {
    check ();
    compute();
});
}
document.addEventListener('DOMContentLoaded', listen);