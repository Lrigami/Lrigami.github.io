<?php
header('Content-Type: application/json');
require 'db.php'; // ton fichier qui connecte à la base

$sql = "SELECT * FROM day_to_day_data";
$stmt = $pdo->query($sql);
$data = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Retour JSON
echo json_encode($data);
?>