<?php
// rootme.php
require '../../../config.php';

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$ROOTME_API_KEY = ROOTME_API_KEY ?? '';

$url = "https://api.www.root-me.org/auteurs/1033656";

$options = [
    "http" => [
        "header" => "Cookie: api_key=$ROOTME_API_KEY\r\n" .
                    "User-Agent: curl/8.5.0\r\n",
        "ignore_errors" => true
    ]
];

$context = stream_context_create($options);
$response = file_get_contents($url, false, $context);

if ($response === false) {
    echo json_encode(["error" => "Impossible de contacter l'API Root-Me"]);
    exit;
}

echo $response;

?>