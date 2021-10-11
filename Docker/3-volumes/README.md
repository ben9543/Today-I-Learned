# 3. Volumes

## Links

- [Official Doc](https://docs.docker.com/storage/volumes/)

## 1. What are docker volumes?

- Volumes are stored in a part of the host filesystem which is managed by Docker (/var/lib/docker/volumes/ on Linux). Non-Docker processes should not modify this part of the filesystem. Volumes are the best way to persist data in Docker.
- Volumes are the preferred way to **persist data in Docker containers** and services.

## 2. Important features of docker volumes

- When the containers stop or are removed, the volumes still exist.
- Volumes are only removed when you explicitly remove them.
- Volumes can be mounted(used) for multiple containers simultaneously.

## 3. When to use docker volumes?

- When you want to store your container’s data on a remote host or a cloud provider, rather than locally.
- When you want to share data among multiple running containers.
