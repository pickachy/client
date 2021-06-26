#!/bin/sh

# deploying api service, so client will be able to execute prerendering
docker-compose up -d --build --no-deps api

docker-compose up -d --build --no-deps client
