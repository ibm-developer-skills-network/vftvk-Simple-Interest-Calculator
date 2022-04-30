// ******* Let's write a function for the interest rate range to access new result on update ********

function updateRate() {
    var rateval = document.getElementById('rate').value
    document.getElementById('rate_val').innerText = rateval + '%'
  }  

// ******* Let's write a function for the compute Interest button to execute when clicked ********

function compute() {
  var principal = document.getElementById('principal').value //Grab the value of the principal from the user with this variable.

  var rate = document.getElementById('rate').value //Grab the value of the interest rate from the user with this variable.

  var years = document.getElementById('years').value //Grab the value of the number of years from the user with this variable.

  var interest = (principal * years * rate) / 100 //compute the amount of interest using the variables declared.

  var year = new Date().getFullYear() + parseInt(years) //Get the year from your system and add the users number of year input to it to return on the result.

  if (principal == 0 || principal < 0) {
    //Write a condition to alert the user for a wrong input, other wise execute the solution.

    alert('Enter a positive number')
    document.getElementById('principal').style.backgroundColor = 'pink'
  } else {
    document.getElementById('principal').style.backgroundColor = 'white'
    document.getElementById('result').style.display = "block"
    document.getElementById('p').innerText = principal
    document.getElementById('n').innerText = rate + "%"
    document.getElementById('y').innerText = year
    document.getElementById('a').innerText = interest
  }
}
document.getElementById('result').on('click', compute) //Integrate the event with the function to return the expected result for the user.


