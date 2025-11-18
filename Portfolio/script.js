function changeLanguage() {
    let language = document.getElementById("languageSelect").value;

    if (language === "fr") {
        document.documentElement.lang = 'fr';

        // Traduction du menu
        document.querySelectorAll('nav a')[1].textContent = 'CV';
        document.querySelectorAll('nav a')[2].textContent = 'Contact';

        // Traduction des sections principales
        document.querySelector('.designer h1').textContent = '/*Développeur*/';
        document.querySelector('.designer p').textContent = 'Développeur spécialisé dans les applications web et mobiles, je crée des interfaces intuitives et des fonctionnalités solides avec HTML, CSS, JavaScript,... J ai aussi de l expérience en C++ et C# pour les jeux vidéo. Mon objectif est de fournir un code propre, structuré et optimisé pour une expérience utilisateur fluide et sans erreur.';
        document.querySelector('.coder h1').textContent = '</Programmeur>';
        document.querySelector('.coder p').textContent = 'Programmeur passionné, je développe des solutions logicielles en utilisant des langages comme JavaScript, Python et HTML/CSS. Je m assure d écrire un code propre, performant et maintenable, tout en optimisant les algorithmes pour garantir une exécution rapide et efficace des sites web, applications ou encore des jeux. ';
        document.querySelector('h2').textContent = 'Quelques-uns de mes derniers travaux académiques';

        // Traduction des projets (en préservant les images)
        document.querySelectorAll('.project-text')[0].textContent = 'Projet Booki';
        document.querySelectorAll('.project-text')[1].textContent = 'Projet le carré d as';
        document.querySelectorAll('.project-text')[2].textContent = 'Projet jeu vidéo';
    } else {
        document.documentElement.lang = 'en';

        // Traduction du menu
        document.querySelectorAll('nav a')[1].textContent = 'CV';
        document.querySelectorAll('nav a')[2].textContent = 'Contact';

        // Traduction des sections principales
        document.querySelector('.designer h1').textContent = '/*Developer*/';
        document.querySelector('.designer p').textContent = 'Developer specialized in web and mobile applications, I create intuitive interfaces and solid features with HTML, CSS, JavaScript, ... I also have experience with C++ and C# for game development. My goal is to deliver clean, structured, and optimized code for a smooth, error-free user experience. ';
        document.querySelector('.coder h1').textContent = '</Coder>';
        document.querySelector('.coder p').textContent = 'Passionate programmer, I develop software solutions using languages like JavaScript, Python, and HTML/CSS. I make sure to write clean, efficient, and maintainable code, while optimizing algorithms to ensure fast and effective execution of websites, applications, and games.';
        document.querySelector('h2').textContent = 'Some of my latest work';

        // Traduction des projets (en préservant les images)
        document.querySelectorAll('.project-text')[0].textContent = 'Booki project';
        document.querySelectorAll('.project-text')[1].textContent = 'Ace Square project';
        document.querySelectorAll('.project-text')[2].textContent = 'Video game project';
    }
}
