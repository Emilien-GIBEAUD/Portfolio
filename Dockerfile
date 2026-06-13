# Pour déployer la page de test sur un VPS (au push sur la branch "test")
FROM nginx:1.31.1-trixie

# Copie des fichiers dans le répertoire nginx
COPY . /usr/share/nginx/html

# Port exposé
EXPOSE 80