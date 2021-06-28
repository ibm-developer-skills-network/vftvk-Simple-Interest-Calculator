function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("textInput").value;
    y = document.getElementById("years").value;
    singleInt=p*(1+r/100);
    finalInt=singleInt-p;
    Y=Number(y);
    totalInt=finalInt*Y;
    totalY=Number(2021)+Y;
    Z=document.querySelector("#result");
    X=document.querySelector(".bpadding")
    X.style.padding="50px 100px 33px 100px";
    w=document.getElementById("principal");
    if(p=="" || r=="" || y==""){
        alert("Please Enter Valid Value!")
        w.focus();
    }
    else if(p==0 || r==0 || y==0){
        alert("Zero Is Not A Valid Number Please Enter +ve Number!")
        w.focus();
    }
    else if(p<0 || r<0 || y<0){
        alert("Please Enter +ve Number!")
        w.focus();
    }
    else{
        Z.innerHTML="<p>If You Diposit "+p+",</p>"+"<p>At An Interest Rate Of "+r+"%.</p>"+"<p>You Will Recive An Amount Of "+totalInt+",</p>"+"<p>In the Year "+totalY+".</p>";
    }
    
}
        