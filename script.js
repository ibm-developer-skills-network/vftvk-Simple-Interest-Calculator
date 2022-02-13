function showVal(newVal){
    document.getElementById("rs_value").innerHTML= newVal + "%";
}

function compute()
{
    p = document.getElementById("principal").value;
    rate = document.getElementById("rs_range").value;
    noy = document.getElementById("nofy").value;
    ans = (p*rate*noy)/100;
    y = new Date().getFullYear();
    ey = y + parseInt(noy);
    document.getElementById("result").innerHTML="If you deposit " + p + " at an interest rate of " + rate + "%. You will receive an amount of " + ans + ", in the year " + ey;
      
}
function updateTextInput(val) {
    document.getElementById('textInput').value=val; 
  } 
  
  
