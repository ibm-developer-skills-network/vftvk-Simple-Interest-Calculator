function compute()
{
   
    
    var principal = document.getElementById("principal").value;
    if (principal<=0){
        window.alert("Enter a positive number")
    }else {
        var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal*years*rate/100;
    var year = new Date().getFullYear()+parseInt(years);
    var textresult =  'if you deposit <mark>' +principal+ ' </mark><br> at an interest rate of <mark>' +rate+ '</mark><br> you will receive an amout of <mark>' + interest+ '</mark><br> in the year '  + year+'</div>';
    //var textresult = '<div id="gator">Alligators rule!!</div>'
    document.getElementById("result").innerHTML  = textresult;
    // console.log(principal);
    // console.log(rate);
    // console.log(years);
    }
    
    
}
function updateRate(){
    var rateVal = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateVal;
}    