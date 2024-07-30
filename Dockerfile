FROM node:21.2.0 as build

# Establecer el directorio de trabajo en /app
WORKDIR /app

# Copiar package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código fuente de la aplicación
COPY . .

# Construir la aplicación para producción
#RUN npm run build

# Exponer el puerto en el que Nginx correrá
EXPOSE 3001

# Comando por defecto para ejecutar Nginx
CMD ["npm", "start"]