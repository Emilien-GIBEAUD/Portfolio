# Pour déployer la page de test sur un VPS (au push sur la branch "test")
FROM nginx:1.31.1-trixie

# Copie des fichiers dans le répertoire nginx
COPY . /usr/share/nginx/html

# Copie de la configuration nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Port exposé
EXPOSE 80