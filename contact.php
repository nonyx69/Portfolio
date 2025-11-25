<?php
$title = "Contact";
$page_css = "contact.css";
include 'includes/header.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $name    = htmlspecialchars($_POST["name"]);
    $email   = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    $mail = new PHPMailer(true);

    try {
        // Paramètres SMTP
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'noa.guilhot.pro@gmail.com';
        $mail->Password   = 'ekcg ewbx zzvz jyiv';
        $mail->SMTPSecure = 'tls';
        $mail->Port       = 587;
        $mail->CharSet    = 'UTF-8';

        $mail->setFrom('noa.guilhot.pro@gmail.com', 'Portfolio');
        $mail->addReplyTo($email, $name);
        $mail->addAddress('noa.guilhot.pro@gmail.com');

        $mail->isHTML(false);
        $mail->Subject = 'Nouveau message depuis ton portfolio';
        $mail->Body    = "Nom : $name\nEmail : $email\n\nMessage :\n$message";

        $mail->send();
        $success = "Message envoyé avec succès !";
    } catch (Exception $e) {
        $error = "Erreur lors de l'envoi du message : {$mail->ErrorInfo}";
    }
}
?>
<main>
    <div class="container">
        <h2>Contactez-moi</h2>

        <?php if (!empty($success)) echo "<p class='success'>$success</p>"; ?>
        <?php if (!empty($error)) echo "<p class='error'>$error</p>"; ?>

        <form method="POST" action="">
            <label>Nom :</label>
            <input type="text" name="name" required>

            <label>Email :</label>
            <input type="email" name="email" required>

            <label>Message :</label>
            <textarea name="message" rows="5" required></textarea>

            <button type="submit">Envoyer</button>
        </form>
    </div>
</main>
<?php include 'includes/footer.php'; ?>
