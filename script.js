function compute() {
    //Name p to avoid double reference to principal id tag
    //Otherwise the focus method won't execute properly
    var p = document.getElementById("principal").value;
    if (p <= 0) {
        alert("Please enter a positive value for the principal.");
            //Upon alert close, brings input back to principal
            principal.focus();
            return false;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = p * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);
    //Output Solution
    solution = "If you deposit <span class='highlight'>&#165;"+p+"</span>\<br\>at an interest rate of <span class='highlight'>"+rate+"%</span>,\<br\>you will receive an amount of <span class='highlight'>&#165;"+interest+"</span>\<br\>in the year <span class='highlight'>"+year+"</span>.\<br\>";  
    document.getElementById("result").innerHTML = solution;
    return solution;   
}
