%generate dropdown list

var select = '';
for (i=1;i<=100;i++){
    select += '<option val=' + i + '>' + i + '</option>';
}
$('#years_select').html(select);

function compute()
{
    p = document.getElementById("principal").value;
    
}
        
