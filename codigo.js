//Función de Coincidencia Tres Numeros

function Tres_Numeros_Coinc ()
{
    var num1= eval(document.getElementById("txtNum1").value);
    var num2= eval(document.getElementById("txtNum2").value);
    var num3= eval(document.getElementById("txtNum3").value);
    var suma1=num2+num3;
    var suma2=num2+num1;
    var suma3=num3+num1;

    if(num1==suma1)
    {
       document.getElementById("txtSuma").value= suma1;
    }
    else if (num3==suma2)
    {
       document.getElementById("txtSuma").value= suma2;
    }
    else if(num2==suma3)
    {
       document.getElementById("txtSuma").value= suma3;
    }
    else
    {
        document.getElementById("txtSuma").value=0;
    }

}