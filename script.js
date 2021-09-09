r=document.querySelector("#rate");
r.onchange=function(){
r.nextElementSibling.innerHTML=this.value+"%";
}
p=document.querySelector("#principal");
t=document.querySelector("#years");
var i=p.value*t.value*r.value/100;
result=document.querySelector("#result_display");
compute=document.querySelector("#compute");
clear=document.querySelector("#clear");
compute.onclick=function(){
var y=2020+Number(t.value);
result.innerHTML="";
i=Math.round(p.value*t.value*r.value/100);

result.innerHTML+="If you deposit <span class='yellow'>"+p.value+"</span><br>at an interest rate of <span class='yellow'>"+r.value+"</span>%<br>You will receive an amount of <span class='yellow'>"+i+"</span><br>in the year <span class='yellow'>"+y+"</span>";}

clear.onclick= function(){location.reload();}
        
