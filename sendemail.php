<?php   
require("assets/PHPMailer-master/src/PHPMailer.php");
require("assets/PHPMailer-master/src/SMTP.php");


$recipientEmail='atendimento@farmawegman.com.br';
$recipientName='Farmawegan';

//collect the posted variables into local variables before calling $mail = new mailer

$senderName = $_POST['p_name'];
$senderEmail = $_POST['p_email'];
$senderSubject = $_POST['p_subject'];
$senderMessage = $_POST['p_message'];

 $mail = new PHPMailer\PHPMailer\PHPMailer();
 $mail->IsSMTP(); // enable SMTP
 //$mail->SMTPDebug = 1;  debugging: 1 = errors and messages, 2 = messages only
 $mail->SMTPAuth = true; // authentication enabled
 $mail->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for Gmail
 $mail->Host = "mail.farmawegman.com.br";
 $mail->Port = 465; // or 587
 $mail->IsHTML(true);
 $mail->Username = "atendimento@farmawegman.com.br";
 $mail->Password = "Farma@#$9089kjQ@";

 $mail->SetFrom($recipientEmail, $recipientName);
 $mail->addReplyTo($recipientEmail,$recipientName);
 $mail->addAddress($recipientEmail, $senderName );

 $mail->Subject = $senderSubject;
 $mail->Body="
    <br/>
    Nome: $senderName<br/>
    Email: $senderEmail<br/>
    Assunto: $senderSubject<br/><br/>
    Mensagem: $senderMessage";
 
    if(!$mail->Send()) {
	echo '<div class="alert alert-danger" role="alert">Error: '. $mail->ErrorInfo.'</div>';
} else {
	//echo '<div class="alert alert-success" role="alert">Obrigado por entrar em contato!. Mensagem enviada com sucesso.</div>';
    header('Location: https://solutpisos.com.br/contato-sucesso');
}
?>