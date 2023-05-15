//Función de Conversor Grados

function GradosCentigrados ()

{
    var c= eval(document.getElementById("txtNum1").value);
    var cons=9/5
    var res= cons*c+32;
    document.getElementById("txtRes").value= res;
}