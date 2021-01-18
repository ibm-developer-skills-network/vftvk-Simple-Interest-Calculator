function rateValue(val){
	document.getElementById('rateInput').value=val;
}
function calculate(){
amount = document.getElementById('amount').value;
rateInput= document.getElementById('rateInput').value;
selectId=document.getElementById('selectId').value;
result=document.getElementById('result');
var today= new Date();
var annee = today.getFullYear();
var result1=((annee=+selectId));
var today2=new Date();
var annee2 =today2.getFullYear();
var result2=result1+annee2
result.innerHTML="If you deposit"+"&nbsp;"+(amount)+","+"<br/>"+ "at an interest rate of"+"&nbsp;"+(rateInput)+"."+"<br/>"+
"You will receive an amount of"+"&nbsp;"+(amount*rateInput*selectId/100)+","+"<br/>"+
"in the year"+"&nbsp;"+(result2);
}

