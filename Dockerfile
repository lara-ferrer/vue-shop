# Descargar imagen de Node
FROM node:14.20.0-alpine

# Instalar un servidor HTTP para servir el contenido estático (también pueden emplearse otros como Nginx o Apache)
RUN npm install -g http-server

# Establecer la carpeta 'app' como el directorio de trabajo actual
WORKDIR /app

# Copiar 'package.json' y 'package-lock.json'
COPY package*.json ./

# Instalar dependencias del proyecto
RUN npm install

# Copiar los archivos y carpetas del proyecto al directorio de trabajo actual (es decir, la carpeta 'app')
COPY . .

# Construir la aplicación
RUN npm run build

# Exponer los puertos donde correrá la aplicación
EXPOSE 8080
CMD [ "http-server", "dist" ]