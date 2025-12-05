<?php
$title = "Contact";
$page_css = "contact.css";
include 'includes/header.php';
?>
<main>
    <div class="container">
        <h2>Contact me</h2>

        <!-- Message de retour -->
        <div id="form-messages" style="margin-bottom:15px;"></div>

        <form id="contactForm" action="https://formspree.io/f/manrbdrr" method="POST">
            
            <label>Nom :</label>
            <input type="text" name="name" required>

            <label>Email :</label>
            <input type="email" name="email" required>

            <label>Objet :</label>
            <input type="text" name="_subject" required>

            <label>Message :</label>
            <textarea name="message" rows="5" required></textarea>

            <button type="submit">Envoyer</button>
        </form>
    </div>

    <script>
    const form = document.getElementById('contactForm');
    const formMessages = document.getElementById('form-messages');

    form.addEventListener('submit', async function(event) {
        event.preventDefault();

        const data = new FormData(form);

        const response = await fetch(form.action, {
            method: form.method,
            body: data,
            headers: { "Accept": "application/json" }
        });

        if (response.ok) {
            formMessages.style.color = "green";
            formMessages.textContent = "Message envoyé avec succès !";
            form.reset();
        } else {
            formMessages.style.color = "red";
            formMessages.textContent = "Erreur lors de l'envoi du message.";
        }
    });
    </script>
</main>

<?php include 'includes/footer.php'; ?>
