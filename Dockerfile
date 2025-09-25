# Basis-Image mit Node
FROM node:20

# Arbeitsverzeichnis im Container
WORKDIR /app

# Abhängigkeiten kopieren
COPY package*.json ./

# Abhängigkeiten installieren
RUN npm install

# Code kopieren
COPY . .

# Port freigeben
EXPOSE 3000

# Dev-Server starten
CMD ["npm", "start"]
