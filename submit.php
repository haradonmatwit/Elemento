<!DOCTYPE html>
<html>
<head lang="en">
   <meta charset="utf-8">
   <title>Feedback Form</title>
   <style>

   </style>
</head>
<body>
   <h1>Form Input</h1>
   <h2>GET Data</h2>
<?php
header('Access-Control-Allow-Methods: POST');
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // handle the form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // do something with the data, like sending an email
    $to = 'your-email@example.com';
    $headers = 'From: ' . $email;
    $body = "Name: $name\nEmail: $email\nSubject: $subject\nMessage:\n$message";
    mail($to, $subject, $body, $headers);

    // send a response to the client
    http_response_code(200);
    echo 'Form submitted successfully.';
} else {
    http_response_code(405);
    echo 'Method Not Allowed';
}
?>
   
</body>
</html>