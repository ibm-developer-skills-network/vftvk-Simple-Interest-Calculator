function compute()
{
    var principal = document.getElementById("principal").value;
    if (!principal || principal < 1)
    {
        alert("Enter a positive number")
        return;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = parseFloat(principal) * parseFloat(years) * parseFloat(rate) / 100;
    var year = new Date().getFullYear() + parseInt(years);
    var outtext = "If you deposit <em>" + principal + "</em>,</br>";
    outtext += "at an interest rate of <em>" + rate + "</em>%.</br>";
    outtext += "You will receive and amount of <em>" + interest + "</em>,</br>"
    outtext += "in the year <em>" + year + "</em>";
    document.getElementById("result").innerHTML = outtext;
}
      
function updateRate()
{
    if (document.getElementById("rate")) {
        var reateval = document.getElementById("rate").value;
       document.getElementById("rate_val").innerText = reateval;
}

}

window.onload = function ()
{
  //  document.getElementById("rate").onchange = updateRate();
}

