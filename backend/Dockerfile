FROM node:18

# Install MongoDB tools
RUN if [ "$(arch)" = "aarch64" ] || [ "$(arch)" = "arm64" ]; then\
    wget https://fastdl.mongodb.org/tools/db/mongodb-database-tools-ubuntu2204-arm64-100.7.3.deb;\
  else\
    wget https://fastdl.mongodb.org/tools/db/mongodb-database-tools-debian10-x86_64-100.7.3.deb;\
  fi;

RUN apt install ./mongodb-database-tools-*.deb

WORKDIR /backend
COPY package.json .
RUN rm -rf node_modules
RUN yarn install --frozen-lockfile
COPY . .
CMD yarn dev
