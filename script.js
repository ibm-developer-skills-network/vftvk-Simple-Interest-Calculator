function compute()
{
    var a = document.getElementById("principal").value;
    if (a<=0 || a==""){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
    
    var i = document.getElementById("rate").value;
    var y = document.getElementById("years").value;
    var d = new Date();
    var x = d.getFullYear() + parseInt(y);
    var p = a * i/ 100 * y;
    
    document.getElementById("result").innerHTML=
    "If you deposit <mark>" + a + "</mark>, <br>"
    + "at an interest rate of <mark>" + i + "%</mark>. <br>"
    + "You will receive an amount of <mark>" + Math.round(p) + "</mark>, <br>"
    + "in the year <mark>" + x + "</mark>";
}
        
