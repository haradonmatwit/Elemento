    <?php
        $name = $_POST['name'];
        $email = $_POST['email'];
        $subject = $_POST['subject'];
        $message = $_POST['message'];
       $from = 'From: My Contact Form';
       // do something with the data, like sending an email
        $to = 'randy032003@gmail.com, phant9@wit.edu, ahmeds10@wit.edu, haradonm@wit.edu';
        $body = "From: $name\nEmail: $email\nSubject: $subject\nMessage:\n$message";
      
       if ($_POST['submit']) {
           if (mail ($to, $subject, $body, $from)) {
           echo '<p>Message Sent Successfully!</p>';
           } else {
           echo '<p>Ah! Try again, please?</p>';
           }
       }
    ?>