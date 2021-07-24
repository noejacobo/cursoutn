<?php 

$nombres=$_POST['nombres'];

$email=$_POST['email'];

$mensaje=$_POST['mensaje'];

// configuramos datos de email

$destinatario="mimail@hotmail.com";

$asunto= "Email enviado desde mi sitio";


// cuerpo de email

$cuerpo.="Nombres: ".$nombres."\n";

$cuerpo.="E-mail: ".$email."\n";

$cuerpo.="Consulta: ".$consulta."\n";

$cuerpo.="Pais: ".$pais."\n";


// enviamos el email

mail($destinatario,$asunto,$cuerpo);

echo $nombre, "Gracias por contactarnos!!!";		

?>