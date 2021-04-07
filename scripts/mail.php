<?php

$to = "piotr.nogala@interia.pl";
$from = $_POST['email'];
$subject = "Website E-mail";
$text = $_POST ['text']; 
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From:".$from . "\r\n";

 echo (mail($to, $subject, $text, $headers));


?>