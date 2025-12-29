<?php
// Simple form handler for Hostinger (PHP)
// - Accepts application/x-www-form-urlencoded, multipart/form-data and application/json
// - Sends an email to site owner and a confirmation to the submitter
// - Basic anti-spam: honeypot field 'hp' and header injection protection

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
  exit;
}

// Read input depending on content type
$contentType = $_SERVER['CONTENT_TYPE'] ?? '';
$data = [];

if (stripos($contentType, 'application/json') !== false) {
  $raw = file_get_contents('php://input');
  $json = json_decode($raw, true);
  if (isset($json['data']) && is_array($json['data'])) {
    $data = $json['data'];
    $formId = $json['formId'] ?? 'form';
  } else {
    // allow flat JSON with fields
    $data = is_array($json) ? $json : [];
    $formId = $data['formId'] ?? ($data['form_id'] ?? 'form');
  }
} else {
  // application/x-www-form-urlencoded or multipart/form-data
  $formId = $_POST['formId'] ?? ($_POST['form_id'] ?? 'form');
  // flatten POST into $data
  foreach ($_POST as $k => $v) {
    $data[$k] = $v;
  }
}

// Basic honeypot: if hp is filled, treat as spam
if (!empty($data['hp'])) {
  // quietly accept but do not process
  http_response_code(204);
  exit;
}

// Helper
function clean($s) {
  // strip tags and trim
  return trim(strip_tags((string)$s));
}

function cleanHeader($s) {
  return str_replace(["\r", "\n"], '', (string)$s);
}

$nom = clean($data['nom'] ?? $data['name'] ?? '');
$email = filter_var($data['email'] ?? '', FILTER_VALIDATE_EMAIL) ? $data['email'] : '';
$message = clean($data['message'] ?? '');
$telephone = clean($data['telephone'] ?? '');

// Basic validation
if (!$nom || !$email || !$message) {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'Missing required fields']);
  exit;
}

// Configuration - change these to your real addresses
$site_owner = 'contact@glorysbusiness-services.com'; // admin receives submissions
$no_reply = 'no-reply@glorysbusiness-services.com'; // used as From

$form_label = clean($formId ?? 'form');
$subject_owner = "Nouveau formulaire: {$form_label}";

$body_owner = "Formulaire: {$form_label}\n";
$body_owner .= "Nom: {$nom}\n";
$body_owner .= "Email: {$email}\n";
$body_owner .= "Téléphone: {$telephone}\n\n";
$body_owner .= "Message:\n{$message}\n";

$owner_headers = "From: " . cleanHeader($no_reply) . "\r\n";
$owner_headers .= "Reply-To: " . cleanHeader($email) . "\r\n";
$owner_headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Send admin email (best-effort)
@mail($site_owner, $subject_owner, $body_owner, $owner_headers);

// Confirmation email to user
$subject_user = "Merci — nous avons bien reçu votre message";
$body_user = "Bonjour {$nom},\n\nMerci pour votre message. Nous vous répondrons rapidement.\n\nCordialement,\nL'équipe de GLORYS BUSINESS";
$user_headers = "From: " . cleanHeader($no_reply) . "\r\n";
$user_headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Send confirmation (do not fail if user mail bounces)
@mail($email, $subject_user, $body_user, $user_headers);

echo json_encode(['ok' => true, 'message' => 'Submission received']);
