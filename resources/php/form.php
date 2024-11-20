<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $frequency = $data['frequency'];

    $to = "aleksandar.husagic.ns@gmail.com"; // Replace with your email
    $subject = "Exercise Feedback Received";
    $message = "User feedback: $frequency";
    $headers = "From: no-reply@example.com"; // Replace as needed

    if (mail($to, $subject, $message, $headers)) {
        http_response_code(200);
        echo "Feedback sent successfully!";
    } else {
        http_response_code(500);
        echo "Failed to send feedback.";
    }
} else {
    http_response_code(405);
    echo "Method not allowed.";
}
?>
