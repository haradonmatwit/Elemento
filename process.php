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

   $title = $_GET['title'];
   $description = $_GET['description'];
   $date = $_GET['date'];
   $time = $_GET['time'];

?>

   <h2>POST Data</h2>
<?php
   $title = $_POST['title'];
   $email = $_POST['description'];
   $date = $_POST['date'];
   $time = $_POST['time'];

?>
</body>
</html>