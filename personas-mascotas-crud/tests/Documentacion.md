##Docuemntacion test unitarios##

**Instalación de herramientas**
Instalacion de node.js desde el ejecutable, así como desde el cmd prompt.
La instalacion debe ser desde la el path raíz del proyecto para que los comandos puedan encontrar los archivos que se utilizarán.

**Partes importantes antes de correr los comandos en prompt para tests**
Crear documento ´package.json´ con los scripts para correr el test, como esta versión de tests ya es obsoleta debe darse un script que nos permita utilizar comandos _deprecated_ (obsoletos), este se incluye también en el package.json como script 'nodeprecated'.
Las dependencias con sus versiones instaladas para poder correr los test, sería la versión 4.3.4 de chai y 9.1.3 de mocha.

**Comandos**
Los tests se correrán desde el cmd prompt ubicado en la raíz del proyecto comenzando con el comando ´npm´que es el comando que se usa cuando el mocha es instalado. Importante, si se quiere utilizar el comando ´mocha´ no se reconocerá.

Para poder correr los scripts escritos en el package.json primero se utiliza la línea ´npm run nodeprecated´.
Sigue ´npm run test´ en el prompt que tomará las funciones llamadas 'test' en el archivo test.js

**Scripts en package.json**
    ´"nodeprecated": "mocha --no-deprecation",´
    ´"test": "mocha --require js:babel-register"´
    ´"test:watch": "mocha --watch --require js:babel-register"´