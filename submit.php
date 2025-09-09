<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $service = $_POST['service'];
  $message = $_POST['message'];

  $mail = new PHPMailer(true);
  $mail->isSMTP();
  $mail->Host = 'smtp.gmail.com';
  $mail->SMTPAuth = true;
  $mail->Username = 'mugileshrammu001@gmail.com';
  $mail->Password = 'Mugil@76679';
  $mail->SMTPSecure = 'tls';
  $mail->Port = 587;

  $mail->setFrom($email);
  $mail->addAddress('mugileshrammu001@gmail.com');
  $mail->isHTML(false);
  $mail->Subject = 'Contact Form Submission';
  $mail->Body = "Name: $name\nEmail: $email\nService: $service\nMessage: $message";

  try {
    $mail->send();
    echo 'Message sent successfully!';
    header('Location: /contact?success=true');
  } catch (Exception $e) {
    echo 'Error sending message. Please try again.';
    header('Location: /contact?success=false');
  }
}
?>