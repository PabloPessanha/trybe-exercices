#!/bin/bash

CURRENT_DIR="basename $(pwd)"
FILE_PATH=$1
if [ -d $FILE_PATH ]
then
    echo "A pasta `$CURRENT_DIR` tem `ls -1 | wc -l` arquivos"
else
    echo "O argumento `$FILE_PATH` não é um diretorio"
fi