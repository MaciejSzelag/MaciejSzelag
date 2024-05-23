<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
    <link rel="stylesheet" href="css/style.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Zeyada&display=swap"
        rel="stylesheet">

</head>
<body>
<?php

if (isset($_SERVER["REQUEST_METHOD"]) == "POST") {
    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $email = $_POST['email'];
    $msg_subject = $_POST['subject'];
    $message = $_POST['subject'];

    // Adres e-mail odbiorcy
    $to = "webby.maciej@gmail.com";

    // Temat wiadomości
    $subject = "Nowa wiadomość od $name";

    // Treść wiadomości
    $body = "Temat wiadomosci: $msg_subject\nWiadomość od: $name $surname\nEmail: $email\nTreść wiadomości:\n$message";

    // Nagłówki wiadomości
    $headers = "From: $email";

    // Wysłanie wiadomości e-mail
    if (mail($to, $subject, $body, $headers)) {
        ?>
<section class="alert">
    <div class="alert_content success">
        <p>Thank you, your email has been sent. I will contact you within 24 hours maximum.</p>
        <a href="/">Go Back</a>
    </div>
</section>

<?php
} else {
        ?>
<section class="alert ">
    <div class="alert_content wrong">
        <p>Something went wrong. Try again.</p>
        <a href="/">Go Back</a>
    </div>
</section>
<?php
}
}

?>
</body>
</html>