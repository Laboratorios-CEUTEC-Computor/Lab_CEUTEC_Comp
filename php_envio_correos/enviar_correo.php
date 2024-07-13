<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $problema = htmlspecialchars($_POST['problema']);
    $mensaje = htmlspecialchars($_POST['mensaje']);
    $div_name = htmlspecialchars($_POST['div_name']);

    $mail = new PHPMailer(true);

    try {
        // Configuración del servidor
        $mail->SMTPDebug = 0; // Habilitar salida de depuración detallada
        $mail->isSMTP();
        $mail->Host       = 'smtp.office365.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'laboratorios_ceutec_computor@outlook.com'; // Cambiar a tu correo
        $mail->Password   = 'Lab_ceutec_comp_504'; // Cambiar a tu contraseña
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        // Destinatarios
        $mail->setFrom('laboratorios_ceutec_computor@outlook.com', 'Laboratorios Computor');
        $mail->addAddress('osbinsalgado@gmail.com');
        $mail->addAddress('osbin_salgado@unitec.edu');

        // Contenido del correo
        $mail->isHTML(true);
        $mail->Subject = "Problema reportado: $problema";
        $mail->Body    = "Problema reportado con la computadora: $div_name<br>Problema: $problema<br>Mensaje: $mensaje";
        $mail->AltBody = "Problema reportado con la computadora: $div_name\nProblema: $problema\nMensaje: $mensaje";

        // Enviar correo
        $mail->send();
        echo json_encode(['status' => 'success', 'message' => 'El mensaje ha sido enviado correctamente']);
    } catch (Exception $e) {
        // Log de error detallado
        error_log("Error al enviar correo: {$mail->ErrorInfo}");
        echo json_encode(['status' => 'error', 'message' => "Error al enviar tu mensaje: {$mail->ErrorInfo}"]);
    }
}
