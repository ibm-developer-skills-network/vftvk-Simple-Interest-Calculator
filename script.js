function compute() 

{ //to get values 

    var principal = document.getElementById("principal").value; 

    var rate = document.getElementById("rate").value; 

    var years = document.getElementById("years").value; 

     

    //to calculate interest 

    var interest = principal * years * rate /100; 

    var year = new Date().getFullYear()+parseInt(years); 

     

    if(principal == undefined || principal <= 0){ 

        alert("Enter a Positive Number"); 

        document.getElementById("principal").focus(); 

         

        return 

    }else{ 

        // to display result 

        var inr = "If you deposit <mark>" + principal +",</mark><br>"; 

        var ra = "at an interest rate of <mark>"+ rate +" %,</mark><br>"; 

        var am="You will receive an amount of <mark>" +interest + ",</mark><br>" 

        var ye ="in the year <mark>"+year +"</mark>"; 

 
 

        document.getElementById("result").innerHTML=inr+ra+am+ye; 

 
 

    } 

     

} 

//to change slider value display 

function getSliderValue() { 

    document.getElementById("rate_val").innerHTML=document.getElementById("rate").value; 

} 
        