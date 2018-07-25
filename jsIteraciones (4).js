function mostrar()
{

	var numero = parseInt(prompt("ingrese un número entre 0 y 10."));

while (!(numero<=9 && numero >= 0))
{
	numero = parseInt(prompt("Numero invalido. Ingrese un numero correcto"));
}

document.getElementById("Numero").value = numero;
}//FIN DE LA FUNCIÓN

/* var numero = parseInt(prompt("ingrese un numero entre 0 y 10."));

while( numero < 0 || numero > 10 || isNaNç(numero))
{
	numero = parseInt(prompt("Error. Reingrese un numero entre 0 y 10."));
}
document.getElementById("Numero").value = numero;
