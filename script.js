function loading() {
    for (var i = 0; i < 51 ; i++) {
    var group = document.getElementById("years");
    var option = document.createElement("option");
    option.text = i;
    group.add(option);
}
}


function back() {
    document.getElementById("idbtn").style.display = "none"
    document.getElementById("boxId").style.display = "block";
    document.getElementById("result").style.display = "none";
    document.getElementById("resetid").style.display = "block";
}


function reset() {
    location.reload()
}


function sum() {
    var amount = document.getElementById("amount").value;
    var interest = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var result_box = document.getElementById("result");
    var result = (amount * (interest/100)) * years;
    var showing_text = "Your amount of money = "+amount+"\n Your interest = "+interest+"\n Your income will be "+result+" after "+years+" years";
    result_box.textContent = showing_text;
    document.getElementById("idbtn").style.display = "block";
    document.getElementById("boxId").style.display = "none";
    document.getElementById("resetid").style.display = "none";
    result_box.style.display = "block";
}


function update() {
    document.getElementById("rateV").value = document.getElementById("rate").value + "%";
}
        