# Etapa 1: Compilación
FROM node:20 AS build

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build --configuration=production

# Etapa 2: Servir con Nginx
FROM nginx:alpine

# Copiamos el build Angular a la carpeta de Nginx
COPY --from=build /app/dist/tienda-online/browser /usr/share/nginx/html

# Copiamos un archivo de configuración Nginx si querés (opcional)
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]