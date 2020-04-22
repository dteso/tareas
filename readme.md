## Aplicación de comandos

Este es el ejercicio del curso

Hay que ejecutar npm install para instalar los paquetes del curso



git init

git status

> Stage all

git add .

       ----------------

> Añadir proyecto actual al repositorio, desde la carpeta del proyecto:

git remote add origin https://github.com/dteso/tareas.git ---> Crea el repositorio

       ----------------

> Push to master

git push -u origin master --> Para subir el repositorio a master

       ----------------

> Generar un release

git tag -a v1.0.0 -m "Primera versión" --> Para generar una version

       ----------------

> Comprobar release

Si ahora hago: git tag
C:\Projects\Node\tareas>git tag
v1.0.0

       ----------------

> Push del tag que acabo de hacer

Para subir el tag a github ----> git push --tags
Enumerating objects: 1, done.
Counting objects: 100% (1/1), done.
Writing objects: 100% (1/1), 164 bytes | 164.00 KiB/s, done.
Total 1 (delta 0), reused 0 (delta 0)
To https://github.com/dteso/tareas.git
 * [new tag]         v1.0.0 -> v1.0.0