function mostrar()
{

var sexo = prompt("ingrese f ó m .");
sexo = sexo.toLowerCase();

while (sexo != "m" && sexo != "f")
{
    sexo = prompt("Reingrese f ó m .");
    sexo = sexo.toLowerCase();
}

document.getElementById('Sexo').value = sexo;

}//FIN DE LA FUNCIÓN