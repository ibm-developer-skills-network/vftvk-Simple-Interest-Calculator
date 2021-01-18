function compute()
{
    p = document.getElementById("principal").value;
    q = document.getElementById("rate").value;
    r = document.getElementById("years").value;
    s=p*q*r / 100
    
}
amount = document.getElementById('amount').value;
rateInput= document.getElementById('rateInput').value;
selectId=document.getElementById('selectId').value;
resultat=document.getElementById('resultat');

/* calcul du nombre d'année*/
var today= new Date();
var n1 = today.getFullYear();
var result1=((n1=+selectId));
var today2=new Date();
var n2 =today2.getFullYear();
var result2=result1+n2
/* calul et affichage de l'intérêt*/
result.innerHTML="If you deposit"+"&nbsp;"+(amount)+","+"<br/>"+ "at an interest rate of"+"&nbsp;"+(rateInput)+"."+"<br/>"+
"You will receive an amount of"+"&nbsp;"+(s)+","+"<br/>"+
"in the year"+"&nbsp;"+(result2);
}        
