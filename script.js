function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    const name = document.querySelector('#principal'); //to select the input box
    if (principal <= 0) { //check if the value is negative or zero
        alert("Enter a positive number");
        name.style.border = '5px solid';
        name.style.borderColor = 'red';
        return false;

      }else{
    document.getElementById("result").innerHTML="If you deposit <b>"+principal+"</b>,\<br\>at an interest rate of <b>"+rate+"%</b>\<br\>You will receive an amount of <b>"+interest+"</b>,\<br\>in the year <b>"+year+"</b>\<br\>"
      }
  


}

function updateRate() //to display seleted range
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

     
