import urllib
from urllib import request
import json
from conexion import *


def insertPersona():

    url = "https://random-data-api.com/api/name/random_name"

    personas = []

    for i in range(1, 20):
        response = urllib.request.urlopen(url)
        data = json.loads(response.read().decode())
        # personas.append(data)

        persona = {
            "nombre": data.get("first_name"),
            "apellido": data.get("last_name")
        }

        personas.append(persona)

    tabla = conexion()

    tabla['personas'].insert_many(personas)


def insertPerros():

    url = "https://dog.ceo/api/breeds/image/random"


# Metodo que sirve para mostrar personas
# def selectPersona():

#     tabla = conexion()
#     for x in tabla.find():
#         print(x)
if __name__ == '__main__':
    insertPersona()
    # selectPersona()
