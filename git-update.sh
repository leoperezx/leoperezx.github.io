#!/bin/bash
# demostración de como leer un texto del usuario

echo "texto del commit?"
read text_commit

echo "Últimos archivos modificados hace 5 horas son: "
find `pwd` -type f -mmin -300 -ls
echo "*=*=*=*=*=*=*=*=*=*=*=*=*=*"
git add -A 
git commit -m "$text_commit"
git push