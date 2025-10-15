Déploiement Frontend via GitHub Actions

Ce repository contient un workflow GitHub Actions `deploy-front.yml` qui :
- build et push l'image Docker du frontend (`front/ocoffee`) vers Docker Hub
- se connecte en SSH au serveur de production et écrit `docker-compose.front.yml` dans `DEPLOY_PATH`, puis exécute `docker-compose up -d`

Secrets requis (Settings > Secrets and variables > Actions):
- DOCKERHUB_USERNAME
- DOCKERHUB_TOKEN
- SSH_HOST
- SSH_USER
- SSH_PRIVATE_KEY
- DEPLOY_PATH (ex: /home/ubuntu/ocoffee)
- SSH_PORT (optionnel)

Notes:
- Le workflow ne déploie que le frontend. Le backend n'est pas modifié.
- Le Dockerfile frontend (front/ocoffee/Dockerfile) construit le projet avec `npm run build` puis sert `dist` avec `serve`.
- Adaptez `VITE_API_URL` dans le `docker-compose.front.yml` généré si votre API est exposée différemment.

Voulez-vous que j'ajoute des étapes de test/lint avant le build ?