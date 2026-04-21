```bash
    docker build -t algo-node .     
    docker images
    docker run -it --rm -v ./:/workspace --name algo-node algo-node
```

Можно убрать флаг __--rm__ и запускать:

```bash
    docker start algo
```
