<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

if(isset($_FILES) && (bool) $_FILES) {

  //allow extensions
  $allowedExtensions = array("jpg", "jpeg", "png", "bmp", "gif");

  $files = array();

  foreach($_FILES as $filename => $file) {
    $file_name = $file('name');
    $temp_name = $file('tmp_name');
    $file_type = $file['type'];
    $path_parts = pathinfo($file_name);
    $ext = $path_parts['extensions'];
    if (!in_array($ext, $allowedExtensions)) {
      die("File is not an image");
    }

    array_push($files, $file);
  }

  //post first name, last name, and email address
  $fname = $_POST['fname'];
  $lname = $_POST['lname'];
  $from = $_POST['email'];

  $to = "banzasbakery@liseidybueno.com";
  $subject = "Order Form Received";
  $headers = "From: $fname $lname $from";

  //switch for each selecuted menu item
  swith($_POST['selectSweets']){
    //if selected item is 3 layered cakes
    case 'threeLayerCakes':
      //var for flavor
      $flavor = $_POST['cakeFlavor'];
      $size = $_POST['3LayerSize'];
      $filling = $_POST['cakeFilling'];
      $vegan = $_POST['vegan10'];

      //send attachment
      $semi_rand = md5(time());
      $mime_boundary = "==Multipart_Boundary_x{$semi_rand}x";

      $headers .= "\nMIME-VERSION: 1.0\n" . "Content-Type: multipart/mixed;\n" . " boundary=\"{$mime_boundary}\"";
      $message = "This is a multi-part message in MIME format\n\n" . "--{$mime_boundary}\n" . "Content-Type: text/plain; charset=\"iso-8859-1\"\n" . "Content-Transfer-Encoding: 7bit\n\n" . $message . "\n\n";
      $message .= "--{$mime_boundary}\n";

      //preparing attachments
      for($x = 0; $x < count($files); $x++) {
        $file = fopen($files[$x]['tmp_name'], "rb");
        $data = fread($file, filesize($files[$x]['tmp_name']));
        fclose($file);
        $data = chunk_split(base64_encode($data));
        $name = $files[$x]['name'];
        $message .= "Content-Type: {\"application/octet-stream\"};\n" . " name=\"$name\"\n" .
          "content-Disposition: attachment;\n" . " filename=\"$name\"\n" .
          "Content-Transfer-Encoding: base64\n\n" . $data . "\n\n";
        $message .= "--{$mime_boundary}\n";
      }

      $allergies = $_POST['allergies'];
      $date = $_POST['date'];
      $pickUpDelivery = $_POST['pickupDelivery'];
      $comments = "";

      if(!empty($_POST['comments'])){
        $comments = $_POST['comments']
      } else {
        $comments = "No comments";
      }

  $order = "Item: Three Layer Cake \nFlavor: $flavor\n Size: $size\n Filling: $filling\n Vegan Option: $vegan\n"

  $txt = "You have received an order form from $fname $lname $email_from:\n\n $message\n\n $order";

  mail($to, $subject, $message, $headers, $txt);
  header("Location: order-thankyou.html");

}

}

 ?>
