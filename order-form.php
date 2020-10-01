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
    $itemType = $_POST['selectSweets'];

    //cake variables
    $threeLayerCakeSize = $_POST['3layersize'];
    $sheetCakeSize = $_POST['sheetCakeSize'];

    //cake, cupcake, cake cup cake cup variables
    $cakeFlavor = $_POST['cakeFlavor'];

    //cake and cake cup variables
    $filling = $_POST['cakeFilling'];

    //cheesecake
    $cheeseCakeFlavor = $_POST['cheeseCakeFlavor'];
    $cheeseCakeAmount = $_POST['cheesecakeQuantity'];

    //cupcakes
    $cupcakeAmt = $_POST['cupcakeAmount'];


    //cheese adn barbie cake sizes
    $cheeseCakeBarbieCakeSize = $_POST['cheeseCakeBarbieCakeSize'];

    //cakecups
    $cakeCupAmt = $_POST['cakeCupAmount'];

    //cookies
    $cookieFlavor = $_POST['cookieFlavor'];
    $cookieAmt = $_POST['cookieAmount'];
    $cookieFilling = $_POST['cupcakeFilling'];

    //vegan
    $vegan10 = $_POST['vegan10'];
    $vegan5= $_POST['vegan5'];
    $vegan3 = $_POST['veganCookies'];

    //for all
    $allergies = $_POST['allergies'];
    $date = $_POST['date'];
    $pickupDelivery = $_POST['pickupDelivery'];
    $comments = $_POST['comments'];

    $mail->isHTML(true);
    $mail->Subject = "An order form has been submitted!";
    $mail->Body="<h3>You've received an order from {$fname} {$lname}</h3>
                <br>
                <b>Email: </b> {$from}
                <br>
                <b>Item: </b> {$itemType}
                <br>
                <b>Flavor: </b> {$cakeFlavor} {$cheeseCakeFlavor} {$cookieFlavor}
                <br>
                <b>Filling: </b> {$filling} {$cookieFilling}
                <br>
                <b>Size: </b> {$threeLayerCakeSize} {$sheetCakeSize} {$cheeseCakeBarbieCakeSize}
                <br>
                <b>Amount: </b> {$cheeseCakeAmount} {$cupcakeAmt} {$cakeCupAmt} {$cookieAmt}
                <br>
                <b>Vegan: </b> {$vegan10} {$vegan5} {$vegan3}
                <br>
                <b>Allergies: </b> {$allergies}
                <br>
                <b>Date: </b> {$date}
                <br>
                <b>Pick Up/Delivery: </b> {$pickupDelivery}
                <br>
                <b>Comments: </b> {$comments}";



    if(!$mail->Send()){
      $error = "Please try later";
      return $error;
    }
    else {
      header("Location: order-thankyou.html");
    }

      $error=setpmailer($to, $from, $fname);
}
?>
