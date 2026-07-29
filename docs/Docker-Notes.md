# Docker Notes

## Image

Blueprint used to create containers.

---

## Container

Running instance of an image.

---

## Dockerfile

Instructions used to build an image.

---

## Layer

Each Dockerfile instruction creates a new cached layer.

---

## Network

Allows containers to communicate.

Never use localhost between containers.

Use container/service names.

---

## Volume

Persistent storage outside containers.

---

## Bind Mount

Maps a host directory into a container.

Best for Development.

---

## Named Volume

Managed by Docker.

Best for Production.

---

## Docker Compose

Runs multiple containers from one YAML file.

Instead of:

docker run ...

docker run ...

docker run ...

Use:

docker compose up
