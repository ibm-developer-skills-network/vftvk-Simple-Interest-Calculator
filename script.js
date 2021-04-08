document.addEventListener("DOMContentLoaded", function() {
    var rate = document.getElementById("rate");
    var display = document.getElementById("rate-display");
    display.innerHTML = rate.value + "%";

    rate.addEventListener("input", () => {
        display.innerHTML = rate.value + "%"; 
    });

    function handleAlert() {
        let alert = document.createElement("div");
        alert.setAttribute("id", "alert");
        alert.style.backgroundColor = "#ff0033";
        alert.style.width = "30%";
        alert.style.height = "60px";
        alert.style.border = "solid black 2px";
        alert.style.position = "fixed";
        alert.style.top = "80px";
        alert.style.left = "35%";
        alert.style.borderRadius = "5px";

        let message = document.createElement("span");
        message.innerHTML = "Enter a valid(Positive Integers) principal amount.";
        message.style.color = "white";
        message.style.marginLeft = "12%";

        alert.appendChild(document.createElement("br"));
        alert.appendChild(message);

        document.getElementById("main-div").appendChild(alert);

        alert.addEventListener("click", closeAlert);
    }

    function closeAlert() {
        document.getElementById("main-div").removeChild(document.getElementById("alert"));
        document.getElementById("principal").focus();
    }

    var principal = document.getElementById("principal");
    var years = document.getElementById("years");
    var button = document.getElementById("calc-interest");
    var output = document.getElementById("output-div");

    button.addEventListener("click", () => {
        while (output.hasChildNodes()) {
            output.removeChild(output.firstChild);
        }

        let val = ((parseInt(principal.value) * parseFloat(rate.value)) / 100) * parseInt(years.value);
        let curDate = new Date();

        if (Number(principal.value) < 1 || Number.isNaN(val)) {
            handleAlert();

            return;
        }

        let highlight1 = document.createElement("mark");
        highlight1.innerHTML = principal.value;
        let highlight2 = document.createElement("mark");
        highlight2.innerHTML = rate.value + "%.";
        let highlight3 = document.createElement("mark");
        highlight3.innerHTML = val + ",";
        let highlight4 = document.createElement("mark");
        highlight4.innerHTML = (curDate.getFullYear() + parseInt(years.value));

        let line1 = document.createElement("p");
        line1.innerHTML = "If you deposit ";
        line1.appendChild(highlight1);
        let line2 = document.createElement("p");
        line2.innerHTML = "at an interest rate ";
        line2.appendChild(highlight2);
        let line3 = document.createElement("p");
        line3.innerHTML = "You will recieve an amount of ";
        line3.appendChild(highlight3);
        let line4 = document.createElement("p");
        line4.innerHTML = "in the year ";  
        line4.appendChild(highlight4);

        output.appendChild(line1);
        output.appendChild(line2);
        output.appendChild(line3);
        output.appendChild(line4);
    });
});