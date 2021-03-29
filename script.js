function compute()
{
    var principal = document.getElementById("principal").value;

    //Validating principal input box
    if(principal<=0){
        alert("Enter a positive value");
        document.getElementById("principal").focus();
        return false;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = (principal * years * rate / 100);
    var yr = parseInt(new Date().getFullYear())+parseInt(years);        

    //Displaying the result
    document.getElementById("result").innerHTML = "<br>"+"If you deposit <mark>"+principal+"</mark>,"+"<br>"+"at an interest of <mark>"+rate+"%</mark>."+"<br>"+"You will receive an amount of <mark>"+interest+"</mark>,"+"<br>"+"in the year <mark>"+yr+"</mark>";

}

//Display numeric value of range
function dispRange(val){
    document.getElementById("sp1").innerHTML = val;//document.getElementById("range").value;  
}
        