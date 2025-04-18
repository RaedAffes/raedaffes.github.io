<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    $to = "raedaffes@gmail.com";
    $subject = "New Message from Personal Website";
    $body = "Name: $name\nEmail: $email\nMessage:\n$message";
    $headers = "From: $email";
    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('Message sent successfully!');</script>";
    } else {
        echo "<script>alert('Failed to send message.');</script>";
    }
}
?>