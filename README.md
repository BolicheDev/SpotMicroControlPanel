<<<<<<< HEAD
# SpotMicroControlPanel
=======
Generate APK

| **Acción**                                  | **Comando**                                                      |
|---------------------------------------------|------------------------------------------------------------------|
| **Inicializar Capacitor en un proyecto**    | `npx cap init`                                                  |
| **Agregar Android como plataforma**         | `npx cap add android`                                           |
| **Actualizar los archivos nativos con cambios web** | `npx cap copy`                                                 |
| **Ir al directorio Android**                | `cd android`                                                   |
| **Compilar la APK de depuración**           | `./gradlew assembleDebug`                                      |
| **Ver el archivo APK generado**             | `ls app/build/outputs/apk/debug/app-debug.apk`                 |


Activar docker:
| **Acción**                                 | **Comando**                                     |
|--------------------------------------------|------------------------------------------------|
| **Ver contenedores en ejecución**          | `docker ps`                                    |
| **Ver todos los contenedores (incluidos los detenidos)** | `docker ps -a`                                 |
| **Ver logs de un contenedor**              | `docker logs -f <CONTAINER_ID>`                |
| **Acceder a la terminal de un contenedor** | `docker exec -it <CONTAINER_ID> /bin/sh`       |
| **Actualizar la imagen y crear un nuevo contenedor** | `docker-compose up --build`                   |
| **Levantar los contenedores sin reconstruir** | `docker-compose up`                           |
| **Detener y eliminar los contenedores**    | `docker-compose down`                         |
| **Eliminar una imagen de Docker**          | `docker rmi <IMAGE_ID>`                       |
| **Eliminar todas las imágenes de Docker**  | `docker rmi $(docker images -q)`              |
| **Ver la IP de un contenedor**             | `docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' <CONTAINER_ID>` |
>>>>>>> master
