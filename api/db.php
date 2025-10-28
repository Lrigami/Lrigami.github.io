<?php
require '../../../config.php';

$host = 'thiryprportfolio.mysql.db';
$dbname = 'thiryprportfolio';
$user = 'thiryprportfolio';
$pass = DB_PASS;

try {
  $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $pass);
} catch (PDOException $e) {
  echo "Erreur : " . $e->getMessage();
}
?>