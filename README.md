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
