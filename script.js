function compute()
{
   var prin = document.getElementById("principal").value;
   var yr =  document.getElementById("years").value;
   var interest = slider.value;
   var intamt = (prin*yr*interest)/100;
   var totyears=Number(yr)+2021;
   var total=Number(prin)+Number(intamt);
   var nar = `&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;If you deposit ${prin} .<br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;at an interest rate of ${interest}% . <br/>
      &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;you will receive an amount of ${total}. <br/>
      &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;in the year ${totyears}`;         

   var nout = document.getElementById("naration");
    nout.innerHTML=nar
   // alert(yr);
}

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value+"%";
//alert("vv");
slider.oninput = function() {
  output.innerHTML = this.value+"%";
//alert("vv");
}
slider.addEventListener("mousemove",function(){
var val=slider.value*5;
slider.style.background='linear-gradient(90deg, rgb(29,163,224)'+ val + '% , rgb(214, 214, 214)'+ val+ '%)';
})
        