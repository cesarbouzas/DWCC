<?php
    header("Access-Control-Allow-Origin: *");
	// Imprimimos un mensaje con los textos recibidos
	if (isset($_GET['nombre']))
		print "<p>Saludos desde el servidor en Modo GET: hola {$_GET['nombre']} </p>";
	else if (isset($_POST['nombre']))
		print "Saludos desde el servidor en modo POST: hola {$_POST['nombre']}. ";
		
	// Mostramos la fecha y hora del servidor web.
	print "<p>La fecha y hora del Servidor Web: ";
	echo date("j/n/Y G:i:s"); 
	print "</p>";
?>