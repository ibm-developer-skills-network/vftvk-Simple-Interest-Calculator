   //reads the value of the slider
function updateRate() {
  var rateval = parseFloat(document.getElementById("rate").value);
  document.getElementById("rate_val").innerText = rateval;
}

// onclick button computwe function will perform and calculate intrest ;

function compute()
{
   
  var principal =parseFloat(document.getElementById("principal").value) ;
  var rate = parseFloat(document.getElementById("rate").value);
  var years = parseFloat(document.getElementById("years").value);
  var year = new Date().getFullYear() + parseInt(years);
  var interest = principal * years * rate / 100;
  var amount = parseInt(principal) + parseFloat(interest);


  //the reference to the element named 'result'
  //When "Compute Interest" is clicked, set its inner html property to the below text.
  document.getElementById("result").innerHTML = "If you deposit <mark>" + principal + "</mark>,<br/>at an interest rate of <mark>" + rate +"%</mark>,<br/>Your Simple Interest will be<mark> "+interest+
    "</mark><br/>You will receive an amount of <mark>" + amount + ",</mark><br/>in the year <mark>" + year + "</mark><br\>";


//If the user enters zero or negative values, show an alert "Enter a positive number"
//Once the user clicks on the alert "OK" button, take the user back to the "Principal" input box, by setting the focus on this box
  if (principal <= 0) {
    alert("Enter positive number");
    document.getElementById("result").remove();
  }
  document.getElementById("principal").focus();
    
} 
