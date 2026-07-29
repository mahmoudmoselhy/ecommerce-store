# Docker Commands

## Build Image

docker build -t ecommerce-backend:v1 ./Backend

docker build -t ecommerce-frontend:v1 ./Frontend

---

## Images

docker images

docker image ls

docker image inspect ecommerce-backend:v1

docker image rm IMAGE_ID

---

## Containers

docker ps

docker ps -a

docker logs ecommerce-backend-container

docker stop ecommerce-backend-container

docker start ecommerce-backend-container

docker restart ecommerce-backend-container

docker rm ecommerce-backend-container

docker rm -f ecommerce-backend-container

---

## Networks

docker network ls

docker network create ecommerce-network

docker network inspect ecommerce-network

docker network rm ecommerce-network

---

## Volumes

docker volume ls

docker volume create mongo-data

docker volume inspect mongo-data

docker volume rm mongo-data

---

## Run Mongo

docker run -d \
 --name ecommerce-mongo \
 --network ecommerce-network \
 -p 27017:27017 \
 -v mongo-data:/data/db \
 mongo:8

---

## Run Backend

docker run -d \
 --name ecommerce-backend-container \
 --network ecommerce-network \
 --env-file Backend/.env \
 -p 5000:5000 \
 -v logs-data:/app/logs \
 -v uploads-data:/app/uploads \
 ecommerce-backend:v1

---

## Execute Command Inside Container

docker exec -it ecommerce-backend-container sh

docker exec -it ecommerce-mongo mongosh

---

## Remove Everything

docker stop $(docker ps -aq)

docker rm $(docker ps -aq)

docker image prune

docker volume prune

docker network prune

docker system prune -a
