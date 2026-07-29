# Docker Compose Commands

## Build and Start

docker compose up --build

---

## Start

docker compose up

---

## Detached Mode

docker compose up -d

---

## Stop

docker compose stop

---

## Stop and Remove

docker compose down

---

## Remove Volumes

docker compose down -v

---

## Restart

docker compose restart

---

## Logs

docker compose logs

docker compose logs backend

docker compose logs mongo

docker compose logs -f

---

## Running Containers

docker compose ps

---

## Execute Command

docker compose exec backend sh

docker compose exec mongo mongosh

---

## Build Again

docker compose build

docker compose build backend

---

## Pull Images

docker compose pull

---

## Start Specific Service

docker compose up backend

docker compose up mongo

---

## Scale

docker compose up --scale backend=3
