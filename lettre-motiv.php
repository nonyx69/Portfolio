<?php
$nom_recruteur = '';
$entreprise = '';
$poste = 'Stagiaire';
$genre = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nom_recruteur = htmlspecialchars($_POST['nom_recruteur']);
    $entreprise = htmlspecialchars($_POST['entreprise']);
    $genre = htmlspecialchars($_POST['genre']);
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Ma lettre personnalisée en PHP</title>
    <link rel="stylesheet" href="lettre-motiv.css">
</head>
<body>

<div class="container">
    <h1>Ma lettre de motivation</h1>

    <?php if (!$nom_recruteur): ?>
        
        <form method="POST">
            <label>Nom du recruteur :</label>
            <input type="text" name="nom_recruteur" required>

            <label>Entreprise :</label>
            <input type="text" name="entreprise" required>

            <label>Civilité :</label>
            <select name="genre" required>
                <option value="Madame">Madame</option>
                <option value="Monsieur">Monsieur</option>
            </select>

            <label>Intitulé du poste :</label>
            <input type="text" name="poste" value="<?= $poste ?>" readonly>

            <button type="submit">Générer la lettre</button>
        </form>

    <?php else: ?>

        <div class="letter">

            <p>Objet : Candidature pour un stage de <strong><?= $poste ?></strong> au sein de  <strong><?= $entreprise ?></strong></p>

            <p>
                <?php
                    // Adresse selon la civilité choisie
                    echo $genre . " " . $nom_recruteur . ",";
                ?>
            </p>

            <p>
                Permettez-moi de vous faire part de ma candidature pour un poste de <?= strtolower($poste) ?> au sein de <?= $entreprise ?>.
                Actuellement étudiant en deuxième année de Bachelor Informatique à l’école IPSSI, je souhaite intégrer dès la rentrée
                prochaine un cursus orienté vers le développement web, de jeux vidéo.
            </p>

            <p>
                Organisé, autonome et doté d’un esprit positif, je possède les compétences nécessaires ainsi que les qualités
                d’adaptation indispensables pour réussir un stage dans le domaine du développement web ainsi que jeu vidéo. 
                Mes projets personnels et mon parcours scolaire m’ont permis de développer des compétences en HTML, CSS, PHP, SQL,
                JavaScript ainsi que des que dans le développement de jeux vidéo avec Unity et Unreal Engine (C# et C++).
            </p>

            <p>
                Intégrer une équipe professionnelle dans le domaine du développement serait pour moi une excellente occasion de mettre en pratique mes compétences,
                 de les consolider et d’en acquérir de nouvelles grâce à des expériences concrètes et variées.
            </p>

            <p>
                Je reste à votre entière disposition pour tout complément d’information ou pour convenir d’un entretien qui
                me permettrait d’échanger davantage sur ma motivation et mon profil.
            </p>

            <p>
                Je vous prie d’agréer, <?= $genre ?> <?= $nom_recruteur ?>, l’expression de mes salutations distinguées.
            </p>

            <p><strong>Noa GUILHOT</strong></p>
            <p>Email : <a href="mailto:noa.guilhot.pro@gmail.com">noa.guilhot.pro@gmail.com</a></p>
            <p>Téléphone : <a href="tel:+33629809157">06 29 80 91 57</a></p>


        </div>

        <a href="cv.html">⬅ Retour au CV</a><br><br>
        <a href="lettre-motiv.php">📝 Modifier mes données</a>

    <?php endif; ?>

</div>

</body>
</html>
