function compute() {

    var prince = document.getElementById("principal")
    var principal = prince.value;
  
    //Check if principal field is empty or not positive
    if(principal == "" || principal <= 0) {
        alert("Enter a positive number");
        prince.focus();
        return false;

    } else {


        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
    
        var amount = principal * years * rate /100;
        var year = new Date().getFullYear()+parseInt(years);
        
        year = '<span style="background-color:#FCF650;">'+year+'</span>'
        amount = '<span style="background-color:#FCF650;">'+amount+'</span>'
        principal = '<span style="background-color:#FCF650;">'+principal+'</span>'
        rate = '<span style="background-color:#FCF650;">'+rate + "%" +'</span>'
    
    
        document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>"  
    
    }
  
}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";

}
        
        
