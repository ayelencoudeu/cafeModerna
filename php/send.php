<?php
// Check for empty fields
if(empty($_POST['nombre'])    ||
   empty($_POST['email'])     ||
   empty($_POST['mensaje'])   ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
   echo "No arguments Provided!";
   return false;
   }

$name = strip_tags(htmlspecialchars($_POST['nombre']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$message = strip_tags(htmlspecialchars($_POST['mensaje']));

// Create the email and send the message

// Create the email and send the message
$to = 'ayelen005@gmail.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_body = "Tenes un mensaje";
$headers = "Nombre: $name\n\nEmail: $email_address\n\nTelefono: $phone\n\nMensaje:\n$message";
mail($to,$email_body,$headers);
return true;
?>

