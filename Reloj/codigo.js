//Función de Reloj 24Hrs

function Reloj ()

{
    var hr1= eval(document.getElementById("txtHr1").value);
    
    if(hr1>12 & hr1<=24)
    {
        var hr2= hr1-12;

        document.getElementById("txtRes").value= hr2+"pm";
    }
    else if (hr1<=12 & hr1>=0)
    {
        var hr3= hr1;

        document.getElementById("txtRes").value= hr3+"am";
    }
}
