<?php

if(isset($_POST['sendForm'])) {

	$email_subject = "Contact Form Recieved!";


	$fname = $_POST['fname'];
  $lname = $_POST['lname'];
	$email_from = $_POST['email'];
	$message = $_POST['message'];

  $mail_to = "contact@banzasbakery.com";
  $headers = "From: ".$email_from;
  $txt = "You have received a contact form from $fname $lname $email_from:\n\n $message";



  mail($mail_to, $email_subject, $txt, $headers);
    header("Location: contact-thankyou.html");

}

?>
