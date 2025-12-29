<?php
// PHPMailer SMTP form handler
// Requires: composer require phpmailer/phpmailer
// Place this file in public/api/form_smtp.php and set env vars in .env.local

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
  exit;
}

// Load request data (supports JSON and form-encoded)
$contentType = $_SERVER['CONTENT_TYPE'] ?? '';
$data = [];

if (stripos($contentType, 'application/json') !== false) {
  $raw = file_get_contents('php://input');
  $json = json_decode($raw, true);
  if (isset($json['data']) && is_array($json['data'])) {
    $data = $json['data'];
    $formId = $json['formId'] ?? 'form';
  } else {
    $data = is_array($json) ? $json : [];
    $formId = $data['formId'] ?? ($data['form_id'] ?? 'form');
  }
} else {
  $formId = $_POST['formId'] ?? ($_POST['form_id'] ?? 'form');
  foreach ($_POST as $k => $v) $data[$k] = $v;
}

// Honeypot
if (!empty($data['hp'])) {
  http_response_code(204);
  exit;
}

function clean($s) { return trim(strip_tags((string)$s)); }
function cleanHeader($s) { return str_replace(["\r","\n"], '', (string)$s); }

$nom = clean($data['nom'] ?? $data['name'] ?? '');
$email = filter_var($data['email'] ?? '', FILTER_VALIDATE_EMAIL) ? $data['email'] : '';
$message = clean($data['message'] ?? '');
$telephone = clean($data['telephone'] ?? '');

if (!$nom || !$email || !$message) {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'Missing required fields']);
  exit;
}

// Require PHPMailer
$autoload = __DIR__ . '/../vendor/autoload.php';
if (!file_exists($autoload)) {
  http_response_code(500);
  echo json_encode(['ok' => false, 'error' => 'PHPMailer not installed. Run: composer require phpmailer/phpmailer']);
  exit;
}
require $autoload;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Read SMTP config from env
$smtpHost = getenv('SMTP_HOST');
$smtpPort = getenv('SMTP_PORT') ?: 587;
$smtpUser = getenv('SMTP_USER');
$smtpPass = getenv('SMTP_PASS');
$smtpSecure = getenv('SMTP_SECURE') ?: 'tls';
$smtpFrom = getenv('SMTP_FROM') ?: ('no-reply@' . ($_SERVER['SERVER_NAME'] ?? 'example.com'));
$smtpFromName = getenv('SMTP_FROM_NAME') ?: 'Site';
$siteOwner = getenv('SITE_OWNER') ?: getenv('ADMIN_EMAIL') ?: 'contact@your-domain.com';

$form_label = clean($formId ?? 'form');
$subject_owner = "Nouveau formulaire: {$form_label}";
$body_owner = "Formulaire: {$form_label}\nNom: {$nom}\nEmail: {$email}\nTéléphone: {$telephone}\n\nMessage:\n{$message}\n";

try {
  $mail = new PHPMailer(true);
  $mail->isSMTP();
  $mail->Host = $smtpHost;
  $mail->SMTPAuth = true;
  $mail->Username = $smtpUser;
  $mail->Password = $smtpPass;
  if (strtolower($smtpSecure) === 'ssl') {
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
  } else {
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
  }
  $mail->Port = (int)$smtpPort;

  $mail->setFrom($smtpFrom, $smtpFromName);
  $mail->addAddress($siteOwner);
  $mail->addReplyTo(cleanHeader($email), $nom);
  $mail->Subject = $subject_owner;
  $mail->Body = $body_owner;
  $mail->send();

  // confirmation to user
  $mail2 = new PHPMailer(true);
  $mail2->isSMTP();
  $mail2->Host = $smtpHost;
  $mail2->SMTPAuth = true;
  $mail2->Username = $smtpUser;
  $mail2->Password = $smtpPass;
  $mail2->SMTPSecure = ($smtpSecure === 'ssl') ? PHPMailer::ENCRYPTION_SMTPS : PHPMailer::ENCRYPTION_STARTTLS;
  $mail2->Port = (int)$smtpPort;
  $mail2->setFrom($smtpFrom, $smtpFromName);
  $mail2->addAddress($email, $nom);
  $mail2->Subject = "Merci — nous avons bien reçu votre message";
  $mail2->Body = "Bonjour {$nom},\n\nMerci pour votre message. Nous vous répondrons rapidement.\n\nCordialement,\nL'équipe";
  $mail2->send();

  echo json_encode(['ok' => true, 'message' => 'Sent via SMTP']);
} catch (Exception $e) {
  http_response_code(500);
  echo json_encode(['ok' => false, 'error' => $e->getMessage()]);
}
