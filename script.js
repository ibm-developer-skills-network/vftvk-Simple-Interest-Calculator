function compute()
{
    var principal;
    var rate;
    var years;
    var interest;
    principal = document.getElementById("principal").value;

    if(principal<=0){
        alert("Please Enter greater than 0");
        document.getElementById("principal").focus();
    }
    
    rate=document.getElementById("rate").value;
    
    years=document.getElementById("years").value;
    var d=new Date();
    var year=d.getFullYear();
    var updated_year=years+year;
    
    interest=(principal * years * rate) / 100;
    var ans=document.getElementById("result").innerHTML=interest;
    var result=document.getElementById("result1");
    
    
    
   

    
}
function rateUpdate(){
    var slider=document.getElementById("rate");
    var demo=document.getElementById("demo");
    demo.innerHTML=slider.value;
}
       