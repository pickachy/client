#!/bin/sh

component=$1

if [ $component != 'proxy' ] && [ $component != 'client' ] && [ $component != 'api' ] && [ $component != 'db' ]
then
    echo ERROR: Component is wrong
    exit 1
fi

echo deploying $component
docker-compose up -d --build --no-deps $component
