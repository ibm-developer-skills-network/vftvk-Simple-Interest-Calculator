//Function to charge all the page needs
function load_page()
{
    fetch();
    check_years();
}

//Function to show the Interest rate selected
function fetch()
{
    var get = document.getElementById("int_rate").value;
    var get_percent = get+"%";
    document.getElementById("int_rate_out").value = get_percent;
}

//Function to check if the years was selected right
function check_years()
{
    var year_selected = document.getElementById("num_years").value;
    
    
    if (year_selected<1 || year_selected=="")
    {
        document.getElementById("num_years").value = 1;
    }
    else if (year_selected>60)
    {
        document.getElementById("num_years").value = 60;
    }
    
}

//Function to calculate profit and print on the screen
function calculate_profit()
{
    var amount = document.getElementById("amount").value; //Invested amount
    var int_rate = document.getElementById("int_rate").value; //Interest Rate
    var num_years = document.getElementById("num_years").value; //No. of Years

    var int_rate_value = int_rate + "%"; //The Interest rate is changed to show as percentage

    var profit = (amount * (int_rate/100)) * num_years; //Calculate de total profit
    
    //Calculate de final Year to receive the profit
    var actual_year = new Date().getFullYear();
    var final_year = parseInt(num_years) + parseInt(actual_year);

    //Select the Div where data will be printed
    const div = document.querySelector("#show_profit");
    
    //Delete the div to erase all data printed
    const div_remove = document.querySelector("#show_profit div");
    div_remove.remove();

    //Create a new Div to print the data
    const new_div = document.createElement("div");
    div.appendChild(new_div);

    //Select the div in the div #show_profit
    var div_select = div.querySelector("#show_profit div");
  
    //Create the first paragraph
    const parag1 = document.createElement("p");
    parag1.innerHTML = "If you deposit " + amount + ",";

    //Create the second paragraph
    const parag2 = document.createElement("p");
    parag2.innerHTML = "at an insterest rate of " + int_rate_value + ".";

    //Create the third paragraph
    const parag3 = document.createElement("p");
    parag3.innerHTML = "You will receive an amount of " + profit + ",";

    //Create the fourth paragraph
    const parag4 = document.createElement("p");
    parag4.innerHTML = "in the year " + final_year;

    //print on the screen all the paragraphs
    div_select.append(parag1);
    div_select.append(parag2);
    div_select.append(parag3);
    div_select.append(parag4);
}