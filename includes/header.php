<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $title ?? "Portfolio" ?></title>

    <link rel="stylesheet" href="header.css">
     <link rel="stylesheet" href="stylestra.css">

    <?php if(isset($page_css)): ?>
        <link rel="stylesheet" href="<?= $page_css ?>">
    <?php endif; ?>

    <script src="script.js" defer></script>


<script type="text/javascript">
    function googleTranslateElementInit() {
        new google.translate.TranslateElement({
            pageLanguage: 'en',
            autoDisplay: false
        }, 'google_translate_element');
    }
</script>
<script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>


</head>



<header>
    <nav>
        <a href="index.php">Home</a>
        <a href="moi.php">Bio</a>
        <a href="bio.php">Projects</a>
        <a href="cv.html">CV</a>
        <a href="contact.php">Contact</a>
        
        <select id="languageSelector">
            <option value="">Choisir une langue</option>
            <option value="fr">Français</option>
            <option value="en">English</option>
        </select>
    </nav>
</header>

<body>
<div id="google_translate_element" style="display:none;"></div>
