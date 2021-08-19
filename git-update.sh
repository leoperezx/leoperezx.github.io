#!/bin/bash
# Algoritmo para realizar actualización de todo los 
# archivos del proyecto en el repo del Git. y guarda
# en un .txt los ultimos archivos modificados.  

echo "texto del commit?"
read text_commit
echo "Últimos archivos modificados hace 5 horas son: "
find `pwd` -type f -mmin -300 -ls | grep -v /\.git* > last-change-files.txt
echo "------------------------"
echo "|     Actualizando     |"
echo "|          GIT         |"
echo "------------------------"
git add -A 
git commit -m "$text_commit"
git push