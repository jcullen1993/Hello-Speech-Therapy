<?php
header("Content-type: text/plain; charset=utf-8");
ini_set('display_errors', true);

$name = $_POST['name'];
$address = $_POST['email'];
$phone = $_POST['phone'];
$msg = $_POST['message'];

require 'mailer/class.phpmailer.php';
require 'mailer/class.smtp.php';

$mail = new PHPMailer();

$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = 'noreply@hellospeechtherapy.ca';
$mail->Password = 'Lo!d60tz';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;        

$mail->setFrom('noreply@hellospeechtherapy.ca');
$mail->addAddress('info@hellospeechtherapy.ca');   

$mail->isHTML(true);                                  

$mail->Subject = "Booking Inquiry";
$mail->Body    = "Name: $name<br><br>".
					"Email: $address<br><br>".
					"Phone: $phone<br><br>".
					"Message: $msg<br><br>";
	
if($mail->send()){
	
	header('Location:/thank-you');
	
}else{
	
	header('Location:/thank-you');;
	
}

?>
