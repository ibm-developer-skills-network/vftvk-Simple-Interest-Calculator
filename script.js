function compute() // compute an amount of interest
{
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var years = document.getElementById("years").value;
    var interest = (principal * years * rate /100).toFixed(2);  
    var year = new Date().getFullYear()+parseInt(years);
    
    if (!principal || principal <= 0 ) {  // principal positive number check
        alert("Enter a positive number");
        document.getElementById("principal").focus()
    } else {
        document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"</mark>%\<br\>You will receive an amount of <mark>"+interest+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>"
    }
    
  
}

function updateRate()  // update rate according to range slider value
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=`${rateval} %`;
}
        