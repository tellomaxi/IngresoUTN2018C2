function mostrar()
{
//tomo la edad  
   var edad;

   edad = document.getElementById("edad").value;
   edad = parseInt(edad);

   if(edad >= 18)
   {
       alert("La persona es mayor de edad");
   }

}
//FIN DE LA FUNCIÓN