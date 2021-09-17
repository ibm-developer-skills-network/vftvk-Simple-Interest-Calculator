function compute() {
    var principal = document.getElementById("principal").value;

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);

    solution = "If you deposit <span class='highlight'>&#165;"+principal+"</span>\<br\>at an interest rate of <span class='highlight'>"+rate+"%</span>,\<br\>you will receive an amount of <span class='highlight'>&#165;"+interest+"</span>\<br\>in the year <span class='highlight'>"+year+"</span>.\<br\>";  
    document.getElementById("result").innerHTML = solution;
    return solution;   
}
