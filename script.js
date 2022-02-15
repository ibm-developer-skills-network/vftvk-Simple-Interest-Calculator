function compute()
{
    a = document.getElementById("Amount").value;
    Rate=document.getElementById("Rate").value;
    years=parseInt(document.getElementById("years").value);
    result= a*Rate*years/100;
    inyear=(new Date()).getFullYear()+years;
    document.getElementById("result").innerHTML="<br>If you deposit <mark>"+a+"</mark>,<br>"+
        "at an interest rate of <mark>"+Rate+"\%</mark><br>"+
        "You will receive an amount of <mark>"+result+"</mark>,<br>"+
        "in the year <mark>"+inyear+"</mark>";
     
}  