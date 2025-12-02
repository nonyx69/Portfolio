FROM php:8.2-apache

# Copie ton code dans le dossier web d’Apache
COPY . /var/www/html/

# Active le module rewrite (utile si tu en as besoin)
RUN a2enmod rewrite

# Droits (optionnel mais recommandé)
RUN chown -R www-data:www-data /var/www/html
