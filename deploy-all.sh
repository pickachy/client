#!/bin/sh

docker-compose down

docker system prune -a -f --volumes

# deploying database
docker-compose up -d --build --no-deps db
    
#checking that the database is ready to accept requests
until docker exec -it db mysql -h 127.0.0.1 -u "root" -c -p"Yav9764Z08KQ&&zdqShuwe#Fd%8W0dxsYQRK10cJRBzzj3F!po" --silent --execute="\q"; do
  >&2 echo "Mysql is unavailable - sleeping"
  sleep 6
done
  
>&2 echo "Mysql is up - executing command"


# deploying api service, so client will be able to execute prerendering
docker-compose up -d --build --no-deps api

docker-compose up -d --build --no-deps client

docker-compose up -d --build --no-deps proxy
