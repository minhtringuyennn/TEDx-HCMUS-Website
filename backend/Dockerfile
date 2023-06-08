FROM node:18

WORKDIR /backend
COPY package.json .
RUN rm -rf node_modules
RUN yarn
COPY . .
CMD yarn dev
