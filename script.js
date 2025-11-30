function changeLanguage() {
    let language = document.getElementById("languageSelect").value;

    if (language === "fr") {
        document.documentElement.lang = 'fr';

        // Traduction du menu
        document.querySelectorAll('nav a')[1].textContent = 'CV';
        document.querySelectorAll('nav a')[2].textContent = 'Contact';

        // Traduction sections principales
        document.querySelector('.designer h1').textContent = '/*Développeur*/';
        document.querySelector('.designer p').textContent = 'Développeur spécialisé dans les applications web et mobiles, je crée des interfaces intuitives et des fonctionnalités solides avec HTML, CSS, JavaScript,... J’ai aussi de l’expérience en C++ et C# pour le développement de jeux. Mon objectif est de fournir un code propre, structuré et optimisé pour une expérience utilisateur fluide et sans erreur.';

        document.querySelector('.coder h1').textContent = '</Programmeur>';
        document.querySelector('.coder p').textContent = 'Programmeur passionné, je développe des solutions logicielles en utilisant des langages comme JavaScript, Python et HTML/CSS. Je m’assure d’écrire un code propre, performant et maintenable, tout en optimisant les algorithmes pour garantir une exécution rapide et efficace des sites web, applications et jeux.';

        // Section hero2
        document.querySelector('.hero2 h1').textContent = 'Bienvenue sur mon Portfolio 👋';
        document.querySelector('.hero2 p').innerHTML = 'Je m’appelle <span class="name">Guilhot Noa</span>, je suis un jeune développeur compétent en<br><span class="react">HTML, CSS, Python, C, C#, C++, JavaScript et plus 🔥</span>.<br><br><span class="sub-text">Je suis actuellement en train d’apprendre <b>React, les APIs</b> et d’autres technologies.</span>';

        // Bouton
        document.querySelector('.btn').textContent = 'Contactez Moi';

        // Réseaux sociaux (alt en français)
        document.querySelectorAll('.socials img')[0].alt = 'GitHub';
        document.querySelectorAll('.socials img')[1].alt = 'LinkedIn';
        document.querySelectorAll('.socials img')[2].alt = 'Gmail';

        // Bitmoji
        document.querySelector('.bitmoji img').alt = 'Bitmoji';

    } else {
        document.documentElement.lang = 'en';

        // Traduction du menu
        document.querySelectorAll('nav a')[1].textContent = 'CV';
        document.querySelectorAll('nav a')[2].textContent = 'Contact';

        // Traduction sections principales
        document.querySelector('.designer h1').textContent = '/*Developer*/';
        document.querySelector('.designer p').textContent = 'Developer specialized in web and mobile applications, I create intuitive interfaces and solid features with HTML, CSS, JavaScript, ... I also have experience with C++ and C# for game development. My goal is to deliver clean, structured, and optimized code for a smooth, error-free user experience.';

        document.querySelector('.coder h1').textContent = '</Coder>';
        document.querySelector('.coder p').textContent = 'Passionate programmer, I develop software solutions using languages like JavaScript, Python, and HTML/CSS. I make sure to write clean, efficient, and maintainable code, while optimizing algorithms to ensure fast and effective execution of websites, applications, and games.';

        // Section hero2
        document.querySelector('.hero2 h1').textContent = 'Welcome to my Portfolio 👋';
        document.querySelector('.hero2 p').innerHTML = 'My name is <span class="name">Guilhot Noa</span>, I’m a young developer skilled in<br><span class="react">HTML, CSS, Python, C, C#, C++, JavaScript and more 🔥</span>.<br><br><span class="sub-text">I’m currently learning <b>React, APIs,</b> and other technologies.</span>';

        // Bouton
        document.querySelector('.btn').textContent = 'Contact Me';

        // Réseaux sociaux (alt en anglais)
        document.querySelectorAll('.socials img')[0].alt = 'GitHub';
        document.querySelectorAll('.socials img')[1].alt = 'LinkedIn';
        document.querySelectorAll('.socials img')[2].alt = 'Gmail';

        // Bitmoji
        document.querySelector('.bitmoji img').alt = 'Bitmoji';
    }
}
