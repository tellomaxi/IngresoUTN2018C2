function mostrar()
{
//tomo la edad  
var edad;

edad = parseInt(document.getElementById("edad").value);

if (edad < 13)
{
    alert("Usted es un niño");
}
else if(edad >= 13 && edad <= 17)
{
    alert("Usted es adolescente");
}
else
{
    alert("Usted es adulto");
}
}
//FIN DE LA FUNCIÓN