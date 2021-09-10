var r=document.querySelector("#rate");
var p=document.querySelector("#principal");
var t=document.querySelector("#years");
var i=p.value*t.value*r.value/100;
var result=document.querySelector("#result_display");
var compute=document.querySelector("#compute");
var clear=document.querySelector("#clear");

r.onchange=function(){

this.nextElementSibling.innerHTML=this.value+"%";
}

compute.onclick=function(){

		if((p.value<=0)||(p.value==="")){
			if(p.value<=0 && !(p.value==="")){
			result.innerHTML="";
			result.innerHTML="Principal amount should be non zero positive number";
			p.focus();
		        }	
			else{
			result.innerHTML="";
			result.innerHTML="Principal amount cannot be blank ";
			p.focus();
			}
		}
		else
		{
			var y=2020+Number(t.value);
			result.innerHTML="";
			i=Math.round(p.value*t.value*r.value/100);

			result.innerHTML+="If you deposit <span class='yellow'>"+p.value+"</span><br>at an interest rate of <span class='yellow'>"+r.value+"</span>%<br>You will receive an amount of <span class='yellow'>"+i+"</span><br>in the year <span class='yellow'>"+y+"</span>";
		}
}
clear.onclick= function(){
location.reload();
}
