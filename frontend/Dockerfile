# Use build arguments to specify the environment (default to "production")
ARG ENVIRONMENT=production

# Stage 1: Build stage (common for both development and production)
FROM node:18 as build-stage

WORKDIR /frontend
COPY package.json yarn.lock ./
RUN rm -rf node_modules
RUN yarn install --frozen-lockfile
COPY . .

RUN if [ "$ENVIRONMENT" = "production" ]; then yarn build; fi

# Stage 2: Production stage
FROM nginx:alpine as production-stage

# Copy the built frontend files from the build stage (if in production mode)
COPY --from=build-stage /frontend/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# Stage 3: Development stage
FROM node:18 as development-stage

WORKDIR /frontend
COPY package.json yarn.lock ./
RUN rm -rf node_modules
RUN yarn install --frozen-lockfile
COPY . .

CMD ["yarn", "dev"]
EXPOSE 3000