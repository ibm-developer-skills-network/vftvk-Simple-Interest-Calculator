// Mathematical equations for results
function compute(){
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var amount = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);

    // alert when negative or 0 is entered in form
    if(principal<= 0){
        alert("Enter a positive number");
        principal.focus();
        return false;
    }  
  
    // Highlight and results
    document.getElementById("result").innerHTML="If you deposit "+"<span class='highlight'>" +"$"+ principal +"</span>" +",\<br\>at an interest rate of "+"<span class='highlight'>"+ rate+"%"+"</span>" +"\<br\>You will receive an amount of "+"<span class='highlight'>"+"$" + amount +"</span>" + ",\<br\>in the year " +"<span class='highlight'>"+ year+"</span>" +"\<br\>"
    
    return true;

}

//Dynamic display for slider
function updateRate(val){
    document.getElementById("rate_val").value=val;
}


