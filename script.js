function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    y = document.getElementById("years").value;
    r = p * r/100 * y
    document.getElementById('result').innerHTML = r;
    
}

  addEventListener('load',inicio,false);

  function inicio()
  {
    document.getElementById('rate').addEventListener('change',cambioRango,false);
  }

  function cambioRango()
  {    
    document.getElementById('range_value').innerHTML=document.getElementById('rate').value;
  }
        
