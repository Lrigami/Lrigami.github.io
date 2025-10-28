<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../vendor/phpmailer/phpmailer/src/Exception.php';
require '../vendor/phpmailer/phpmailer/src/PHPMailer.php';
require '../vendor/phpmailer/phpmailer/src/SMTP.php';
require '../../../config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $message = $_POST['message'] ?? '';

    $mail = new PHPMailer(true);
    try {
        // Configuration SMTP OVH
        $mail->isSMTP();
        $mail->Host = 'ssl0.ovh.net';
        $mail->SMTPAuth = true;
        $mail->Username = 'contact@thiryprune.fr'; // adresse OVH
        $mail->Password = MAIL_PASS;
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Destinataire et expéditeur
        $mail->setFrom('contact@thiryprune.fr', 'Portfolio');
        $mail->addAddress('contact@thiryprune.fr', 'Portfolio');

        // Contenu
        $mail->isHTML(true);
        $mail->Subject = "Message depuis le site portfolio";
        $mail->Body = "<b>Nom :</b> $name <br> <b>Email :</b> $email <br> <b>Message :</b> $message";

        $mail->send();
        echo json_encode(['status' => 'success']);
    } catch (Exception $e) {
        echo json_encode(['status' => 'error', 'message' => 'Please try again later.']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Méthode non autorisée']);
}
?>