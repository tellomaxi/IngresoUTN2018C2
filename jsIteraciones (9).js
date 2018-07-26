function mostrar()
{
	var maximo;
	var minimo;
	var flag=0;
	var numero;
	var respuesta;

	do
	{
		numero = parseInt(prompt("Ingrese un numero: "));
		
		if(numero > maximo || flag == 0)
		{
			maximo = numero;
		}

		if(numero < minimo || flag == 0)
		{
			minimo = numero;
			flag = 1;
		}

		respuesta = prompt("Desea continuar?");
	}while(respuesta == "si");

	document.getElementById("maximo").value = maximo;
	document.getElementById("minimo").value = minimo;
}//FIN DE LA FUNCIÓN