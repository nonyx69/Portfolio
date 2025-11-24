<?php
// Création (ou ouverture) de la base SQLite
$db = new PDO('sqlite:data.db');

// Création d'une table simple
$db->exec("
    CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nom TEXT NOT NULL,
        message TEXT NOT NULL
    )
");

// Exemple de données (uniquement si la table est vide)
$check = $db->query("SELECT COUNT(*) FROM messages")->fetchColumn();

if ($check == 0) {
    $db->exec("INSERT INTO messages (nom, message) VALUES 
        ('Noa', 'Bienvenue sur ma démo PHP + SQL !'),
        ('Recruteur', 'Merci pour votre candidature 😊')
    ");
}

echo "Base de données créée avec succès ✔️";
