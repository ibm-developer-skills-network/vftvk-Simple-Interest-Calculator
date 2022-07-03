function compute()
{
    
   var principal = document.getElementById("principal");
   principal_val = principal.value;
   var rate = document.getElementById("rate").value;
   var years = document.getElementById("Years").value;
   var interest = principal_val * years * rate /100 ;
   var year = new Date().getFullYear()+parseInt(years);

      if(principal_val == "" || principal_val <=0 ){
         alert("please enter positive numbers");
         principal.focus();
      }else {
         
         var result = document.getElementById("result");
         result.innerHTML = `If you deposit <mark> `+principal_val+`</mark>,
         <br>at an interest rate of <mark>`+rate+`</mark>%.<br>
         You will receive an amount of <mark>`+interest+`</mark>,<br>
         in the year <mark>`+year+`</mark>.<br>`;
         // alert(result);
         principal.focus();
      }
    
}
function updateRate() {
    
    var rateval = document.getElementById("rate").value;
    var showrate = document.getElementById("rate_val");
    showrate.innerText = rateval + "%";
   }

   /*
   var interest = principal * years * rate /100 ;

   var year = new Date().getFullYear()+parseInt(years);
   var result = document.getElementById("result");
   result.innerHTML = `If you deposit <mark> `+principal_val+`</mark>,
   <br>at an interest rate of <mark>`+rate+`</mark>%.<br>
   You will receive an amount of <mark>`+interest+`</mark>,<br>
   in the year <mark>`+year+`</mark>.<br>`;
   // alert(result);
   // principal.focus();

   */