<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $to = "aleksandar.husagic.ns@gmail.com";
    $headers = "From: " . $email;

    mail($to, $subject, $message, $headers);
    echo "Thank you for your message!";
}
?>
