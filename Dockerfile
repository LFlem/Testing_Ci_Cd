FROM node:20

WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm ci

# Copier le reste des fichiers du projet
COPY . .

# Construire le projet (si nécessaire)
RUN npm run tsc:build

# Exposer le port sur lequel l'application s'exécute (si applicable)
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["npm", "dist/src/app.js"]