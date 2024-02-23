<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form fields
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Set up the recipient email address
    $to = "marvugochukwu@gmail.com";

    // Set up the email subject
    $subject = "New message from your website contact form";

    // Set up the email body
    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Message: $message\n";

    // Send the email
    if (mail($to, $subject, $body)) {
        echo "Thank you for your message. We'll be in touch soon!";
    } else {
        echo "Oops! An error occurred while sending the message.";
    }
}
?>