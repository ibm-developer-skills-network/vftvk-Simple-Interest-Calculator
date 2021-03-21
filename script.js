function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("myRange").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate/100;
    var dueyear = new Date().getFullYear();
	var myyr = Number(dueyear) + Number(years);

    var displayresult = document.getElementById("result");
    displayresult.innerText =  "If you deposit " + principal + "\n at an interest rate of " + rate + "%. \nYou will receive an interest of " + interest + "\nin the year " + myyr;
}

function getmyslider(){
    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    
    output.innerHTML = slider.value + "%";
	
}
       
