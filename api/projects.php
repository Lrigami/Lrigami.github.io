<?php
header('Content-Type: application/json');
require 'db.php';

// Requête pour récupérer tous les projets
$sql = "SELECT * FROM projects";
$stmt = $pdo->query($sql);
$projects = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Pour chaque projet, récupérer les tools associés
foreach ($projects as &$project) {
    $stmtTools = $pdo->prepare("
        SELECT t.name 
        FROM tools t
        JOIN projects_tools pt ON t.id = pt.tool_id
        WHERE pt.project_id = ?
    ");
    $stmtTools->execute([$project['id']]);
    $project['tools'] = $stmtTools->fetchAll(PDO::FETCH_COLUMN);
}

// Retour JSON
echo json_encode(['projects' => $projects]);
?>