from pymongo import MongoClient
from pprint import pprint

def conexion():
# Creando conexion
    cliente = MongoClient("mongodb://admin:admin3231@localhost:27017/")
    db = cliente.dogs
    mydb = cliente['dogs']

    return mydb