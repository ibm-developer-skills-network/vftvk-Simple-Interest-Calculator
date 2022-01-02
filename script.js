function compute() {
    capital = document.getElementById("capital").value;
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;
    console.log(years);

    currentYear = parseInt(new Date().getFullYear());
    // converter string para int
    years = parseInt(years);

    years = currentYear + years;
    rate = parseInt(rate);
    capital = parseInt(capital);
    amount = (capital * (rate/100)) + capital;

    //criando uma nova div a partir da funcao
    var NewDiv = document.createElement("div");
    // inserindo código html na nova div
    NewDiv.innerHTML = "<p>If you deposit: "+ capital +"</br>"
        + "at an Interest rate of " + rate + "%</br>"
        + "You will receive an amount of " + amount +"</br>"
        + "in the year " + years +"</p>";
    // criando vasriavel container para dizer onde quero que as divs sejam incluidas no html
    const DivContainer = document.getElementById("DivContainer")
    // adicionando essa div no body do documento
    // document.body.appendChild(NewDiv);
    DivContainer.appendChild(NewDiv)
}
        