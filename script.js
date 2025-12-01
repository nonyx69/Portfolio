document.addEventListener("DOMContentLoaded", function () {

    const selector = document.getElementById("languageSelector");

    selector.addEventListener("change", function () {
        const lang = this.value;
        const googleSelect = document.querySelector(".goog-te-combo");

        if (!googleSelect) {
            console.log("Google Translate n'est pas encore chargé.");
            return;
        }

        googleSelect.value = lang;
        googleSelect.dispatchEvent(new Event("change"));
    });

});
