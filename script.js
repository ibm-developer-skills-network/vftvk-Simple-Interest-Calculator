function rateValue(val){
	document.getElementById('rateInput').value=val;
}
function calculate(){
	/* déclaration des variables*/
amount = document.getElementById('amount').value;
rateInput= document.getElementById('rateInput').value;
selectId=document.getElementById('selectId').value;
resultat=document.getElementById('resultat');

/* calcul du nombre d'année*/
var today= new Date();
var annee = today.getFullYear();
var result1=((annee=+selectId));
var today2=new Date();
var annee2 =today2.getFullYear();
var result2=result1+annee2

/* calul et affichage de l'intérêt*/
resultat.innerHTML="If you deposit"+"&nbsp;"+(amount)+","+"<br/>"+ "at an interest rate of"+"&nbsp;"+(rateInput)+"."+"<br/>"+
"You will receive an amount of"+"&nbsp;"+(amount*rateInput*selectId/100)+","+"<br/>"+
"in the year"+"&nbsp;"+(result2);
}

