#!/bin/bash

if [ -d $1 ]
then
    echo "É um diretorio."
    ls -l $1
elif [ -f $1 ]
    then
       echo "É um arquivo"
       ls -l $1
    else
      echo "É outra coisa"
fi