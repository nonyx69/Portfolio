<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $title ?? "Portfolio" ?></title>

    <!-- CSS global -->
    <link rel="stylesheet" href="styles.css">

    <!-- CSS spécifique à la page -->
    <?php if(isset($page_css)): ?>
        <link rel="stylesheet" href="<?= $page_css ?>">
    <?php endif; ?>

    <script src="script.js" defer></script>
</head>

<body>

<header>
    <nav>
        <a href="index.php">Home</a>
        <a href="cv.html">CV</a>
        <a href="bio.php">Bio</a>
        <a href="#">Contact</a>

        <div class="language-switch">
            <select id="languageSelect" onchange="changeLanguage()">
                <option value="en">En</option>
                <option value="fr">Fr</option>
            </select>
        </div>
    </nav>
</header>
