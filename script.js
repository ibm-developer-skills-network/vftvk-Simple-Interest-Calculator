function showInt(){
    
    var r=document.getElementById("rate").value;
    
    document.getElementById("result").innerHTML=r;
    
}


document.getElementById("rate").addEventListener("click",showInt);



function showRes(){
    var p=document.getElementById("principal").value;
    var r=document.getElementById("rate").value;
    var t=document.getElementById("years").value;
    var cY=2021+parseInt(t);

    var res=(p*r*t)/100;
    document.getElementById("interestR").innerHTML="If you deposit "+p+"<br>"+"at an interest rate of "+r+"%"+"<br>"+"You will receive an amount of "+res+","+"<br>"+"in the year "+cY;
    // alert(res);
}