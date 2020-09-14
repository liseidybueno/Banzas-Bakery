<?php

  require('PHPMailer/PHPMailerAutoload.php');
  require('PHPMailer/class.smtp.php');
  require('PHPMailer/class.phpmailer.php');

  if(isset($_POST['submit'])){

    //create phpmailer object
    $mail = new PHPMailer();

    //set up SMTP
    $mail->IsSMTP();
    $mail->SMTPDebug = 0;
    $mail->Host = "XXXXX";
    $mail->SMTPSecure='ssl';
    $mail->SMTPAuth=true;
    $mail->Port = 465;
    $mail->Username = "XXX@XXXXXXX.com";
    $mail->Password = "XXXXXXXX";

    $from = $_POST['email'];
    $mail->From = "XXX@XXXXXXX.com";
    $mail->FromName = "Order at Banza's Bakery";
    $mail->Sender = $from;
    $to = "XXXX@gmail.com"; //email address to be sent to
    $mail->addAddress($to);

    //create variables for forms
    //customer info
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];

    $flavor = $_POST['barbieCakeFlavor'];
    $size = $_POST['barbieCakeSize'];
    $vegan = $_POST['vegan10'];
    $allergies = $_POST['allergies'];
    $date = $_POST['date'];
    $pickupDelivery = $_POST['pickupDelivery'];
    $comments = $_POST['comments'];

    $path = 'upload/' . $_FILES["barbieUploadImg"]["name"];
    move_uploaded_file($_FILES["barbieUploadImg"]["tmp_name"], $path);
    $mail->addAttachment($path);


    $mail->isHTML(true);
    $mail->Subject = "An order form has been submitted!";
    $mail->Body="<h2>You've received an order from {$fname} {$lname}</h2>
                  <br />
                  <b>Email: </b> {$from}
                  <br />
                  <b>Item: </b>Barbie Cake
                  <br />
                  <b>Flavor: </b>{$flavor}
                  <br />
                  <b>Size: </b> {$size}
                  <br />
                  <b>Vegan: </b>{$vegan}
                  <br />
                  <b>Allergies: </b>{$allergies}
                  <br />
                  <b>Date: </b>{$date}
                  <br />
                  <b>Pickup/Delivery: </b>{$pickupDelivery}
                  <br />
                  <b>Comments: </b>{$comments} ";


    if(!$mail->Send()){
      $error = "Please try later";
      return $error;
    }
    else {
      header("Location: order-thankyou.html");
      unlink($path);
      return $error;
    }

      $error=setpmailer($to, $from, $fname);
}
?>
