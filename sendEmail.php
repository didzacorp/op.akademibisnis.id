<?php

// require_once 'vendor/autoload.php';
require_once 'ses2.php';
$subject = 'Test email bro';
$plaintext_body = 'This email was sent with Amazon SES using the AWS SDK for PHP.' ;
$html_body =  '<h1>AWS Amazon Simple Email Service Test Email</h1>'.
              '<p>This email was sent with <a href="https://aws.amazon.com/ses/">'.
              'Amazon SES</a> using the <a href="https://aws.amazon.com/sdk-for-php/">'.
              'AWS SDK for PHP</a>.</p>';

$m = new SimpleEmailServiceMessage();
$m->addTo('dzakirharista@gmail.com');
$m->setFrom('system@akademibisnis.id');
$m->setSubject($subject);
$m->setMessageFromString($html_body);

$ses = new SimpleEmailService('AKIA4YKMZQ5RBE3KCB6U', '1fg/k8gy96DCu0c+HLKLDxE7wUYK0rGTDmVs7H+r');
print_r($ses->sendEmail($m));


?>
