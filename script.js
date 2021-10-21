function populateYearsDropdownList()
{
    let yearDropdown = document.getElementById('years');

    for (var i = 1; i < 100; i++) {
        let yearOption = document.createElement('option');
        yearOption.text = i;
        yearOption.value = i;
        yearDropdown.add(yearOption);
    }
}

function sliderRangeUpdate() {
    var rangeslider = document.getElementById("sliderRange");
    var output = document.getElementById("sliderValue");
    output.innerHTML = rangeslider.value;

    rangeslider.oninput = function() {
        Rate = this.value;
        output.innerHTML = this.value;
    }
}

function compute()
{

    let ammount = document.getElementById("ammount").value;
    let rate = document.getElementById("sliderRange").value;
    let years = document.getElementById("years").value;
    const d = new Date()
    let currentYear = parseInt(d.getFullYear()) + parseInt(years)

    document.getElementById("computeOut1").innerHTML = "If you deposit " + ammount + ","
    document.getElementById("computeOut2").innerHTML = "at an interest rate of " + rate + "%,"
    document.getElementById("computeOut3").innerHTML = "you'll receive " + (ammount * rate * years) + ","
    document.getElementById("computeOut4").innerHTML = "In the year " + currentYear
}
