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
    $mail->Host = "mail.banzasbakery.com";
    $mail->SMTPSecure='ssl';
    $mail->SMTPAuth=true;
    $mail->Port = 465;
    $mail->Username = "banzaery@banzasbakery.com";
    $mail->Password = "LTA1975!";

    $from = $_POST['email'];
    $mail->From = "banzaery@banzasbakery.com";
    $mail->FromName = "Order at Banza's Bakery";
    $mail->Sender = $from;
    $to = "banzasbakery@gmail.com"; //email address to be sent to
    $mail->addAddress($to);


    //create variables for forms
    //customer info
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];

    $flavor = $_POST['cakecupFlavor'];
    $filling = $_POST['cakecupFilling'];
    $quantity = $_POST['cakeCupAmount'];
    $vegan = $_POST['vegan5'];
    $allergies = $_POST['allergies'];
    $date = $_POST['date'];
    $pickupDelivery = $_POST['pickupDelivery'];
    $deliveryName = $_POST['deliveryName'];
    $addressLine1 = $_POST['address1'];
    $addressLine2 = $_POST['address2'];
    $state = $_POST['state'];
    $city = $_POST['city'];
    $zip = $_POST['zip'];
    $comments = $_POST['comments'];

    $mail->isHTML(true);
    $mail->Subject = "An order form has been submitted!";
    $mail->Body="<h2>You've received an order from {$fname} {$lname}</h2>
                  <br />
                  <b>Email: </b> {$from}
                  <br />
                  <b>Item: </b>Cakecups
                  <br />
                  <b>Flavor: </b>{$flavor}
                  <br />
                  <b>Filling: </b>{$filling}
                  <br />
                  <b>Quantity: </b>{$quantity}
                  <br />
                  <b>Vegan: </b>{$vegan}
                  <br />
                  <b>Allergies: </b>{$allergies}
                  <br />
                  <b>Date: </b>{$date}
                  <br />
                  <b>Pickup/Delivery: </b>{$pickupDelivery}
                  <br />
                  <b>Delivery Address:</b>{$deliveryName}
                  <br />{$addressLine1}
                  <br />{$addressLine2}
                  <br />{$state}
                  <br />{$city}
                  <br />{$zip}
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

if(isset($_POST['submitMobile'])){

  //create phpmailer object
  $mail = new PHPMailer();

  //set up SMTP
  $mail->IsSMTP();
  $mail->SMTPDebug = 0;
  $mail->Host = "mail.banzasbakery.com";
  $mail->SMTPSecure='ssl';
  $mail->SMTPAuth=true;
  $mail->Port = 465;
  $mail->Username = "banzaery@banzasbakery.com";
  $mail->Password = "LTA1975!";

  $from = $_POST['email'];
  $mail->From = "banzaery@banzasbakery.com";
  $mail->FromName = "Order at Banza's Bakery";
  $mail->Sender = $from;
  $to = "banzasbakery@gmail.com"; //email address to be sent to
  $mail->addAddress($to);


  //create variables for forms
  //customer info
  $fname = $_POST['fname'];
  $lname = $_POST['lname'];

  $flavor = $_POST['cakecupFlavor'];
  $filling = $_POST['cakecupFilling'];
  $quantity = $_POST['cakeCupAmount'];
  $vegan = $_POST['vegan5'];
  $allergies = $_POST['allergies'];
  $date = $_POST['date'];
  $time = $_POST['time'];
  $pickupDelivery = $_POST['pickupDelivery'];
  $deliveryName = $_POST['deliveryName'];
  $addressLine1 = $_POST['address1'];
  $addressLine2 = $_POST['address2'];
  $state = $_POST['state'];
  $city = $_POST['city'];
  $zip = $_POST['zip'];
  $comments = $_POST['comments'];

  $mail->isHTML(true);
  $mail->Subject = "An order form has been submitted!";
  $mail->Body="<h2>You've received an order from {$fname} {$lname}</h2>
                <br />
                <b>Email: </b> {$from}
                <br />
                <b>Item: </b>Cakecups
                <br />
                <b>Flavor: </b>{$flavor}
                <br />
                <b>Filling: </b>{$filling}
                <br />
                <b>Quantity: </b>{$quantity}
                <br />
                <b>Vegan: </b>{$vegan}
                <br />
                <b>Allergies: </b>{$allergies}
                <br />
                <b>Date: </b>{$date}
                <br />
                <b>Time: </b>{$time}
                <br />
                <b>Pickup/Delivery: </b>{$pickupDelivery}
                <br />
                <b>Delivery Address:</b>{$deliveryName}
                <br />{$addressLine1}
                <br />{$addressLine2}
                <br />{$state}
                <br />{$city}
                <br />{$zip}
                <br />
                <b>Comments: </b>{$comments} ";


  if(!$mail->Send()){
    $error = "Please try later";
    return $error;
  }
  else {
    header("Location: order-thankyoumobile.html");
    unlink($path);
    return $error;
  }

    $error=setpmailer($to, $from, $fname);
}
?>
