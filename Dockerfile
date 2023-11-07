#Usar imagen 
FROM node:lts

#Camviamos al directo actuak
WORKDIR /app

#Copiamos el contenido del proyecto
COPY . /app/

#Exponer el puerto 80
EXPOSE 80

#Iniciar aplicación
CMD [ "node","app.js" ]