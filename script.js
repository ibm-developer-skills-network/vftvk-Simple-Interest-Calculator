
  function rate(){
    var ratevalue=document.getElementById("interestRateate");
    document.getElementById("r").innerHTML=ratevalue.value+"%";
  }

  function compute(){
    var ratevalue=parseFloat(document.getElementById("interestRateate").value);
    var principal=parseFloat(document.getElementById("amount").value);
    var time=parseFloat(document.getElementById("nberOfYears").value);
    var total= principal*(1+((ratevalue)*(time)));
    if(document.getElementById("amount").value==""){
      alert("Please enter the principal amount");
    }
    var today=new Date();
    var year=today.getFullYear();
    time+=year;
    var sortie="If you deposit ";
    sortie+=principal;
    sortie+=" at an interest rate of "
    sortie+=ratevalue;
    sortie+="%";
    sortie+=" You will receive an amount of ";
    sortie+=total;
    sortie+=" in the year ";
    sortie+=time
    document.getElementById("resultat").innerHTML=sortie;
    }

  