function compute()
{
   //get principal, rate, and years
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    //validate principal
    if (principal <= 0 )
    {
        alert("Enter a positive number.");
        document.getElementById("principal").focus();
    }

    // make years numeric
    years = parseInt(years);

    // calculate the interest
    var interest = principal * years * rate / 100;
    
    // get the date of the current year and add the 
    // years to it to get the future date
    var d = new Date();
    var future = d.getFullYear() + years;

    //set the results html
    document.getElementById("result").innerHTML = 'If you deposit <mark>' + principal + '</mark>,<br/> at an interest rate of <mark>' + rate + '</mark>.<br/> You will receive an amount of <mark>' + interest + '</mark>,<br/> in the year <mark>' + future + '</mark>';    
    
}

function slider()
{
    // get the slider value and set its html span tag
    rateslide = document.getElementById("rate").value;

    document.getElementById("ratespan").innerHTML = rateslide;
}
        