//Oculto el mensaje de resultado
document.getElementById("result").hidden = true;
rate = document.getElementById("rate");

//oninput canbiando el valor del interes automatico
rango = document.getElementById("rate_val");
rate.oninput = (ev) => {
  rate_value.innerHTML = ev.target.value;
};
//Para capturar el evento click
var boton = document.getElementById("boton");
boton.addEventListener("click", compute);


function compute(evento) {
    evento.preventDefault();
  var number, rate, years,devolver, interes;

  number = document.getElementById("principal").value;
  if (isNaN(number) || number <= 0) {
    alert("Enter a positve number");
  } else {
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;
    console.log
    result = document.getElementById("result");
    deposito = document.getElementById("deposito");
    interes = document.getElementById("interes");
    devolver = document.getElementById("devolver");
    endyear = document.getElementById("endyear");

    let devolver1 = number * rate *years / 100;
    console.log("valor es", rate);
    
    let year = new Date().getFullYear() + parseInt(years);
    deposito.innerHTML = number;
    
    interes.innerHTML = rate;
    console.log(number, rate, years, devolver1);
    devolver.innerHTML = devolver1;
    const newLocal = endyear.innerHTML = year;
    //Mostrando el mensaje de resultado
    document.getElementById("result").hidden = false;
  }
}

