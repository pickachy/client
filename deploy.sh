#!/bin/sh


# deploying database
docker-compose up -d db 
    
#checking that the database is ready to accept requests
until docker exec -it db mysql -h 127.0.0.1 -u "root" -c -proot --silent --execute="\q"; do
  >&2 echo "Mysql is unavailable - sleeping"
  sleep 5
done
  
>&2 echo "Mysql is up - executing command"


# waiting for seeded data
until docker exec -it db mysql -h 127.0.0.1 -u "root" -c -proot --silent --execute="SELECT 1 FROM Loan"; do
  >&2 echo "Loans data has not been seeded yet... Waiting"
  sleep 10
done

until docker exec -it db mysql -h 127.0.0.1 -u "root" -c -proot --silent --execute="SELECT 1 FROM Seo"; do
  >&2 echo "Seo data has not been seeded yet... Waiting"
  sleep 10
done

# deploying api service, so client will be able to execute prerendering
docker-compose up -d api
docker-compose up -d client
docker-compose up -d proxy


