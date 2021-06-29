// function for when you click the button

function compute()
{
    // Using DOM properties to access the elements in the HTML doc.
   
    var principal = document.getElementById("principal").value;
   
    //Providing Validation for whether principal amount is entered or not.

    if(principal < 1){
       alert("Enter a Positive Number for Principal");
       document.getElementById("principal").focus();
   }
   else 
   {

   // If provided accurate principal amount then proceed the logic.

   var rate = document.getElementById("rate").value; 
   var years = document.getElementById("years").value;
   var interest = principal * years * rate /100;
   var year = new Date().getFullYear()+parseInt(years);

    // using string template to implement strings with values easily.

   document.getElementById("result").innerHTML=`If you deposit <mark>${principal},</mark><br/>at an interest rate of <mark>${rate}%</mark><br/>You will receive an amount of <mark>${interest}</mark>,<br/>in the year ${year}<br/>`;
   }
}

//function for when we update the range input 

   function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}
