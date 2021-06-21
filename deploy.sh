#!/bin/sh


# deploying database
docker-compose up -d db 
    
#checking that the database is ready to accept requests
until docker exec -it db mysql -h 127.0.0.1 -u "root" -c -proot --silent --execute="\q"; do
  >&2 echo "Mysql is unavailable - sleeping"
  sleep 5
done
  
>&2 echo "Mysql is up - executing command"


# deploying api service, so client will be able to execute prerendering
docker-compose up -d api

# Seed data to database
sleep 5
bash seed.sh

docker-compose up -d client
docker-compose up -d proxy


