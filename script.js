function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    y = document.getElementById("years").value;
    re = document.getElementById("result");
    i = parseFloat(p)*parseFloat(r)*parseFloat(y)/100
	if (isNaN(i)){
		alert("Invalid Input")
	} else{
		document.getElementById("principal_").innerHTML = p
		document.getElementById("rate_").innerHTML = r
		document.getElementById("result").innerHTML = i
		document.getElementById("year_").innerHTML = new Date().getFullYear()+parseFloat(y)
		re.classList.add("format")
		document.querySelector(".result").classList.remove('hide')
	}
}

function updateTextInput(val){
	document.getElementById('per').innerHTML=(val+"%");
	if ((!isNaN(document.getElementById("principal").value)) and !(document.querySelector(".result").classList.contains('hide')))
		compute();
}
