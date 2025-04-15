# Étape 1 : Build
FROM node:20 AS builder

WORKDIR /app

# Copier uniquement les fichiers nécessaires au build
COPY package*.json ./
RUN npm ci

# Copier le reste et construire
COPY . .
RUN npm run tsc:build

# Étape 2 : Runtime (image plus légère)
FROM node:20-slim

WORKDIR /app

# Copier uniquement les fichiers nécessaires pour exécuter l'app
COPY package*.json ./
RUN npm ci --omit=dev  # ⬅️ installe seulement les dépendances de prod

# Copier les fichiers compilés (et autres utiles à l’exécution)
COPY --from=builder /app/dist ./dist

# (optionnel) copier d'autres fichiers utiles (views, static, etc.)
# COPY --from=builder /app/public ./public

EXPOSE 3000

# Lancer le fichier JS compilé directement
CMD ["node", "dist/app.js"]