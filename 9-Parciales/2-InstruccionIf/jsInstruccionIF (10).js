function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var max = 11;
	var min = 1;
	var resultado;

	var resultado = Math.floor(Math.random() * (max - min) + min);
	alert(resultado);

	if(resultado >= 9 && resultado <= 10 )
	{
		alert("Excelente");
	}
	else if(resultado <= 4)
	{
		alert("Vamos, la proxima se puede");
	}
	else
	{
		alert("Aprobo");
	}
}//FIN DE LA FUNCIÓN