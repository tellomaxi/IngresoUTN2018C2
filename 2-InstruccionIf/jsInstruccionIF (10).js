function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
		var max = 11;
	var min = 1;
	var nota;

	var nota = Math.floor(Math.random() * (max - min) + min);
	alert(nota);

	if(nota >= 9 && nota <= 10 )
	{
		alert("Excelente" + nota);
	}
	else if(nota <= 4)
	{
		alert("Vamos, la proxima se puede" + nota);
	}
	else
	{
		alert("Aprobo"+ nota );
	}
}//FIN DE LA FUNCIÓN