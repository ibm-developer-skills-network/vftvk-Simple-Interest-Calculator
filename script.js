function compute()
{
    p = document.getElementById("principal").value;
    
    for(var i=1; i<=50; i++){
    var select = document.getElementById("years");
    var option = document.createElement("OPTION");
	select.options.add(option);
	option.text = i;
	option.value = i;
}
    
}
        
