<?php
// The message
$eamil = $_GET['email'];
$message = $email." Has registered to view the site!";

// In case any of our lines are larger than 70 characters, we should use wordwrap()
$message = wordwrap($message, 70, "\r\n");

$headers .= 'To: Mary <mary@example.com>, Kelly <kelly@example.com>' . "\r\n";
$headers .= 'From: Birthday Reminder <birthday@example.com>' . "\r\n";
$headers .= 'Cc: birthdayarchive@example.com' . "\r\n";
$headers .= 'Bcc: birthdaycheck@example.com' . "\r\n";

// Send
mail('webteam@gemmovement.org', 'New Subscriber', $message, $headers);
//mail('yungtechboy1@gmail.com', 'New Subscriber', $message);
//$echo "SENT";
?>