<?php
$title = "À propos de moi";
$page_css = "bio.css";
include 'includes/header.php';
?>
<main></main>

<section class="projects-section">

    <h2>Mes <span>Projets</span> académiques</h2>
    <p>Voici une collection de projets que j'ai réaliser au cour de ma premiere année de foramtion</p>

    <div class="projects-grid">

        <!-- Projet 1 -->
        <div class="project-card">
            <div class="project-img">
                <img src="booki.png" alt="projet e-commerce">
            </div>
            <div class="project-content">
                <h3>Projet Booki</h3>
                <p>Mise en place d'une page d'acceuil d'un site de AirBNB + Responsive</p>
                <div class="tags">
                    <span class="tag">HTML</span>
                    <span class="tag">CSS</span>
                </div>
            </div>
        </div>

        <!-- Projet 2 -->
        <div class="project-card">
            <div class="project-img">
                <img src="carre-as.png" alt="projet météo">
            </div>
            <div class="project-content">
                <h3>Projet Carré d'As</h3>
                <p>Mise en place d'un site web pour un bar qui propose une carte des jeu avec getion de base de donnée + Responsive</p>
                <div class="tags">
                    <span class="tag">PHP</span>
                    <span class="tag">SQL</span>
                    <span class="tag">PHPmyAdmin</span>
                </div>
            </div>
        </div>

        <!-- Projet 3 -->
        <div class="project-card">
            <div class="project-img">
                <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357" alt="projet blog">
            </div>
            <div class="project-content">
                <h3>Jeu Unity 2D</h3>
                <p>Initiation a la création de jeu vidéo en 2D avec Unity </p>
                <div class="tags">
                    <span class="tag">Unity</span>
                    <span class="tag">C#</span>
                    <span class="tag">UI/UX</span>
                </div>
            </div>
        </div>

    </div>

</section>


<section class="projects-section">

    <h2>Mes <span>Projets</span> personnels</h2>
    <p>Voici une collection de projets que j'ai réaliser seul ou avec des amis</p>

    <div class="projects-grid">

        <!-- Projet 1 -->
        <div class="project-card">
            <div class="project-img">
                <img src="booki.png" alt="projet e-commerce">
            </div>
            <div class="project-content">
                <h3>Projet Snake</h3>
                <p>Création d'un jeu simple avec Unity en 2D</p>
                <div class="tags">
                    <span class="tag">Unity</span>
                    <span class="tag">C#</span>
                </div>
            </div>
        </div>

        <!-- Projet 2 -->
        <div class="project-card">
            <div class="project-img">
                <img src="carre-as.png" alt="projet météo">
            </div>
            <div class="project-content">
                <h3>Projet survie</h3>
                <p>Création d'un jeu open world en 3D avec Unity</p>
                <div class="tags">
                    <span class="tag">Unity</span>
                    <span class="tag">C#</span>
                    <span class="tag">Autodidact</span>
                </div>
            </div>
        </div>

        <!-- Projet 3 -->
        <div class="project-card">
            <div class="project-img">
                <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357" alt="projet blog">
            </div>
            <div class="project-content">
                <h3>Projet TPT</h3>
                <p>Création d'un jeu tour par tour 3D sur Unity avec un camarade de classe</p>
                <div class="tags">
                    <span class="tag">Unity</span>
                    <span class="tag">C#</span>
                    <span class="tag">UI/UX</span>
                    <span class="tag">Travail d'équipe</span>
                </div>
            </div>
        </div>


        <!-- Projet 4 -->
        <div class="project-card">
            <div class="project-img">
                <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357" alt="projet blog">
            </div>
            <div class="project-content">
                <h3>Projet Flappy Plane</h3>
                <p>Création d'un jeu 2D avec Unity</p>
                <div class="tags">
                    <span class="tag">Unity</span>
                    <span class="tag">C#</span>
                </div>
            </div>
        </div>


    </div>

</section>



<!-- CERTIFICATIONS -->
    <section class="portfolio2">
        <h2>Some of my latest certifications</h2>
        <div class="certifs">

            <div class="certif">
                <div class="image-container">
                    <a href="#"><img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357" alt="Certif Image 1"></a>
                </div>
                <p class="certif-text">ANSSI</p>
                 <p class="certif-details">Présentation du projet, ce que j'ai appris (langages, compétences, ...).</p>
            </div>

            <div class="certif">
                <div class="image-container">
                    <a href="#"><img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357" alt="Certif Image 2"></a>
                </div>
                <p class="certif-text">CNIL</p>
            </div>

            <div class="certif">
                <div class="image-container">
                    <a href="#"><img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357" alt="Certif Image 3"></a>
                </div>
                <p class="certif-text">LINUX</p>
            </div>

            <div class="certif">
                <div class="image-container">
                    <a href="#"><img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357" alt="Certif Image 4"></a>
                </div>
                <p class="certif-text">PYTHON</p>
            </div>

            <div class="certif">
                <div class="image-container">
                    <a href="#"><img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357" alt="Certif Image 5"></a>
                </div>
                <p class="certif-text">JAVASCRIPT</p>
            </div>

        </div>
    </section>

<?php include 'includes/footer.php'; ?>
