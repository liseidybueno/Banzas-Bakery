<?php

require('PHPMailer/PHPMailerAutoload.php');
require('PHPMailer/class.smtp.php');
require('PHPMailer/class.phpmailer.php');


if(isset($_POST['sendForm'])) {

	//create phpmailer object
	$mail = new PHPMailer();

	    //set up SMTP
    $mail->IsSMTP();
    $mail->SMTPDebug = 0;
    $mail->Host = "mail.XXX.com";
    $mail->SMTPSecure='ssl';
    $mail->SMTPAuth=true;
    $mail->Port = 465;
    $mail->Username = "XXX@XXXXX.com";
    $mail->Password = "XXX";

    $from = $_POST['email'];
    $mail->From = "XXX@XXXXX.com";
    $mail->FromName = "Order at Banza's Bakery";
    $mail->Sender = $from;
    $to = "XXX@gmail.com"; //email address to be sent to
    $mail->addAddress($to);

	$email_subject = "Contact Form Recieved!";
  $fname = $_POST['fname'];
  $lname = $_POST['lname'];
	$email_from = $_POST['email'];
	$message = $_POST['message'];

	$mail->isHTML(true);
	$mail->Subject = "An order form has been submitted!";
	$mail->Body="You have received a contact form from $fname $lname $email_from: <br /><br />$message ";


	if(!$mail->Send()){
		$error = "Please try later";
		return $error;
	}
	else {
		header("Location: contact-thankyou.html");
		unlink($path);
		return $error;
	}

		$error=setpmailer($to, $from, $fname);


}

?>
