
function compute(){
var amount = Number(document.getElementById("amount").value);
var ir = Number(document.getElementById("ir").value);
var select = document.getElementById("years");
var years = Number(select.options[select.selectedIndex].value);
var thisYear = new Date().getFullYear();

if(amount <= 0 || "" == document.getElementById("amount").value){
	alert("Enter a positive Number")
	}else{
  var result = amount/100 * ir * years ;

  document.getElementById("dAmount").innerHTML = amount;
  document.getElementById("dIr").innerHTML = ir;
  document.getElementById("dYears").innerHTML = thisYear+years;
  document.getElementById("dResult").innerHTML = result;
  document.getElementById("resText").style.display = "block";
  }
}


function valSlider(){

document.getElementById("sliderVal").innerHTML = Number(document.getElementById("ir").value).toFixed(2);

}