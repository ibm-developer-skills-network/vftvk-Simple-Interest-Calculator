function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = (principal * years * rate / 100);
    var yr = parseInt(new Date().getFullYear())+parseInt(years);        

    document.getElementById("result").innerHTML = "If you deposit "+principal+" at an interest of "+rate+"You will receive an amount of "+interest+"in the year "+yr;

}

function dispRange(val){
    document.getElementById("sp1").innerHTML = val;//document.getElementById("range").value;  
}
        