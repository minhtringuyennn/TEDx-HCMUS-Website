# TEDx Ticket System

## Run the System

We can easily run the whole with only a single command:

```bash
docker-compose up
```

Docker will pull the MongoDB and Node.js images (if your machine does not have it before).

The services can be run on the background with command:

```bash
docker-compose up -d --build
```

## Stop the System

Stopping all the running containers is also simple with a single command:

```bash
docker-compose down
```

If you need to stop and remove all containers, networks, and all images used by any service in <em>docker-compose.yml</em> file, use the command:

```bash
docker-compose down --rmi all
```
