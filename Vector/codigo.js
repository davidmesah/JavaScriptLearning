function operar()
{
    var pal= Array(5)
    pal[0]= document.getElementById("txtVal1").value
    pal[1]= document.getElementById("txtVal2").value
    pal[2]= document.getElementById("txtVal3").value
    pal[3]= document.getElementById("txtVal4").value
    pal[4]= document.getElementById("txtVal5").value
    document.getElementById("txtOriginal").value= pal
    pal.reverse()
    document.getElementById("txtInvertido").value= pal
}