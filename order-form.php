<?php
use PHPMailer\PHPMailer\PHPMailer;

if(isset($_POST['sendOrderForm'])){

  //variables
  $fname = $_POST['fname'];
  $lname = $_POST['lname'];
  $comment = $_POST['comments'];
  $email = $_POST['email'];
  $sweets = $_POST['selectSweets'];
  $order = "";
  $error = "";

  require_once "PHPMailer/PHPMailer.php";
  require_once "PHPMailer/SMTP.php";
  require_once "PHPMailer/Exception.php";

  $mail = new PHPMailer();

  $mail->IsSMTP();
  $mail->Host = "smtp.flockmail.com";
  $mail->Port = "456";
  $mail->Port = "80";
  $mail->SMTPAuth = true;
  $mail->Username = "banzasbakery@liseidybueno.com";
  

  if($sweets == "Three Layer Cakes"){

    //validate form
    if(empty($_POST['selectCakeFlavors']) ||
        empty($_POST['selectcakeFilling']) ||
        empty($_POST['selectCakeSizes']) ||
        empty($_POST['vegan10'])){
          $error = "\n Error: all fields are required.";
        } else {
          $cakeFlavor = $_POST['selectCakeFlavors'];
          $cakeFilling = $_POST['selectcakeFilling'];
          $threeLayerCakeSizes = $_POST['selectCakeSizes'];
          $vegan10 = $_POST['vegan10'];
          $order = "Item: Three Layer Cake \nFlavor: $cakeFlavor\n Size: $threeLayerCakeSizesize\n Filling: $cakeFilling\n Vegan Option: $vegan10\n";

          }
        }

  $body = "You have received an order form from $fname $lname $from:\n \n\n$order";

  //email settings
  $mail->From($email, $fname, $lname);
  $mail->addAddress("banzasbakery@liseidybueno.");
  $mail->Subject = "Order Form Received";
  $mail->Body = $body;

  if($mail->send()){
    header("Location: order-thankyou.html");
    exit();
  } else {
    echo '<script language="javascript">';
    echo 'alert("message could not be sent")';
    echo '</script>';
  }

}

 ?>
