#!/bin/sh

# deploying api service, so client will be able to execute prerendering
docker-compose build api
docker-compose up --no-deps -d api


docker-compose build client
docker-compose up --no-deps -d client
