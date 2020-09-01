#!/bin/bash
# 2. Modifique o Shell Script do exercício 6 para aceitar uma quantidade ilimitada de arquivos ou diretórios
#  como argumento (ou parâmetro).
for i in $*
do
if [ -d $i ]
then
    echo "$i é um diretorio, com os seguintes arquivos:"
    ls $i
    elif [ -f $i ]
        then
            echo "$i é um arquivo"
        else
            echo "$i é outra coisa"
    fi
done