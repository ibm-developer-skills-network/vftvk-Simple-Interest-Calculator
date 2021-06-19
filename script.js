function compute()
{    
    var principle = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var total = ((rate/100*years)+1)*principle;
    total = Math.round((total + Number.EPSILON) * 100) / 100; //stolen from some guy on stackoverflow. . . god bless his/her soul
    
    
    var d = new Date();
    var n = d.getFullYear();
    var finalyear = n+parseInt(years);


    console.log(principle + " "+rate+" "+" "+years);

    //checks to see if all boxes have a valid value *************************************************************************************************************************************************************************

    if(principle<=0){
        console.log("prinicple is too low " + principle);
        alert("Enter a positive number");
        document.getElementById("rate").focus();
        return(false);
    }
    //done with cheking to see if all boxes are valid *********************************************************************************************************************************
    
    document.getElementById("result").innerHTML = "If you deposit <span class = 'highlight'>"+principle+"</span>, <br>at an interest rate of <span class = 'highlight'>"+rate+"%</span>. <br> You will receive an amount of <span class = 'highlight'>"+total+"</span>, <br> in the year <span class = 'highlight'>"+finalyear;
}
        