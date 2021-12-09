# Microservicios
Container para el proyecto DAS


contendenor A - db
creacion de volumen para la bd
```docker
docker volume create mongoVolume
```

creacion contenedor y asignar volumen

```docker
docker run -d -p 27027:27027 --name mongo_db -e MONGODB_INITDB_ROOT_USERNAME=foo -e MONGODB_INITDB_ROOT_PASSWORD=bar123 mongo:4.4

mongoVolume

docker exec -it mongo_db mongo
> use baz

> db.qux.save({name: "al", age: 18, status:"D",
    groups:["politics","news"]})
> db.qux.find()
```

# DAS_PROJECT
Repositorio para el proyecto final de la materia Diseño y Arqitectura de Software.

## Materia
Diseño y Arquitectura de Software.

## Profesor
Angel Santiago Jaime Zavala.

## Equipo
- Almaguer Nájera Mario Humberto
- Amaya López Edson Gerardo
- Briones Esquivel Patricia Isabel
- De la Cruz Dávila Jesús Salvador
- ~~Rodríguez Mártinez Jose Adrián~~

## Pre requisitos
- Docker
- DockerCompose
<br> <br> ![MERN IMAGE](https://github.com/EdsonAmaya7/Microservicios/blob/development/Images/MERN.jpg)

## Tecnologías
Para el desarrollo principal de este proyecto utilizamos el MERN STACK:

- Mongo (Database)
- Express (Backend)
- ReactJS (Frontend)
- NodeJS (Backend) 

Además de las siguientes tecnologías:
- MongoExpress (DBMS)
- Diagrams (Python library to track the architecture diagrams) 

Para el tema de orquestadores y contenedores utilizamos:
- Docker
- DockerCompose

## Arquitectura
La arquitectura establecida fue la de microservicios contando con un total de 5 servicios distribuidos en diferentes contenedores.
- **Contenedor A:** Contiene una imagen funcional de MongoDB.
- **Contenedor B:** Contiene una imagen funcional de MongoExpress.
- **Contenedor C:** Contiene un scrapper hecho en NodeJS que se encarga de traer los datos e ingresarlos a la base de datos.
- **Contenedor D:** Contiene una imagen de NodeJS y Express que servirá como API para lograr la comunicación y manejo de peticiones. 

## Instrucciones para correr los contenedores
1. Clonar el repositorio.
2. Entrar a la carpeta del repositorio.
3. En caso de tener contenedores corriendo, asegurarte de que todos los contenedores están detenidos. 
    ```
    > docker stop (docker ps -q -a)
    ```
4. Asegurarte de que todos los puertos necesarios para correr los contenedores estén disponibles. 
5. Como paso opcional puedes eliminar todas las imagenes para que no causen ningún tipo de conflicto. 
    ```
    > docker system prune --all 
    ```
6. Múevete a la rama **development**
    ```
    > git branch
    > git checkout development
    ```
7. Corre el cliente.
    ```
    > docker build -t "react-app" ./client/
    ```
    ![CLIENT IMAGE](Images\cli_client.jpg)
8. Corre el servidor.
    ```
    > docker build -t "api-server" ./server/
    ```
    ![SERVER IMAGE](Images\cli_server.jpg)
9. Por último, corre el orquestador. 

    ```
    > docker-compose up
    ```

    ![ORQUESTADOR IMAGE](Images\cli_orquestador.jpg)
    
    ![DOCKER IMAGE](Images\docker.jpg)
## Instrucciones para acceder a los servicios
1. El servicio de MongoDB corre en el puerto 27017.
2. El servicio de NodeJS y Express (API) corre en http://localhost:3000. 


## Recorrido por la página web de ReactJS
Este servicio nos permite registrar usuarios con respectivas mascotas (Únicamente perros). 

Al dar clic en ___Crear datos___, podrás registrar tus propios usuarios. Por defecto el formulario ya cuenta con información base para que la demostración sea más rápida.
<br> <br> ![REACT1 IMAGE](Images\react_1.jpg)

Si los campos se encuentran llenados correctamente, nos aparece una alerta de éxito.
<br> <br> ![REACT2 IMAGE](Images\react_2.jpg)


De lo contrario, no podrá avanzar al registro.

Al dar clic en ___Listar datos___, podemos acceder a las personas guardadas correctamente. 
<br> <br> ![REACT3 IMAGE](Images\react_3.jpg)

Aquí podemos **leer**, **modificar** y **eliminar** los datos de cualquier persona deseada.
<br> <br> ![REACT4 IMAGE](Images\react_4.jpg)
<br> <br> ![REACT5 IMAGE](Images\react_5.jpg)


##  Diagramas de Arquitectura
Para poder generar nuestro diagrama de arquitectura utilizamos la herramienta de mingrammer Para correr el script es necesario instalar diagrams para python y graphviz:
```
> pip install graphviz
> pip install diagrams
```
El script llamado diagrama.py de la carpeta diagrams se encarga de generar el esquema de arquitectura:
```
> Python diagrama.py
```
![DIAGRAMA ARQUITECTURA IMAGE](diagrams\arquitectura_diagrama.jpg)

Mientras que para generar nuestro diagrama de base de datos usamos una herramienta online. Estos archivos los podrás encontrar en la carpeta llamada diagrams.
<br> <br> ![DIAGRAMA DB IMAGE](diagrams\diagrama_db.jpg)

## Agradecimientos
- Al profesor Angel Santiago Jaime Zavala, por siempre estar al pendiente de nosotros y nuestras necesidades. Lo tqm. 

- A nuestro mismo equipo por contribuir frecuentemente a este proyecto, no darse por vencido y hacer un gran trabajo a pesar de las adversidades.

- A spotify, por acompañarnos durante el desarrollo de  este proyecto.