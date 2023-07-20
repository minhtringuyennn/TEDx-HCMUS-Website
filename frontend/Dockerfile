FROM node:18 as build-stage

WORKDIR /frontend
COPY package.json yarn.lock ./
RUN rm -rf node_modules
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

FROM nginx:alpine as production-stage

COPY --from=build-stage /frontend/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
