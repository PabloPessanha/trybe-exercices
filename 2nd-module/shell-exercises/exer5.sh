#!/bin/bash

read -p "Coloque um caminho: " FILE_PATH

if [ -d $FILE_PATH ]
then
    echo "É um diretorio."
    ls -l $FILE_PATH
elif [ -f $FILE_PATH ]
    then
       echo "É um arquivo"
       ls -l $FILE_PATH
    else
      echo "É outra coisa"
fi