# Use build arguments to specify the environment (default to "production")
ARG ENVIRONMENT=production

# Stage 1: Build stage (common for both development and production)
FROM node:18 as build-stage
RUN echo "Running in $ENVIRONMENT mode"

WORKDIR /frontend
COPY . .
RUN rm -rf node_modules
RUN yarn install --frozen-lockfile

# Pass the ENVIRONMENT build argument to the container
ARG ENVIRONMENT
RUN if [ "$ENVIRONMENT" = "production" ]; then yarn build; else yarn dev; fi

# Stage 2: Production stage
FROM nginx:alpine as production-stage

# Copy the built frontend files from the build stage (if in production mode)
COPY --from=build-stage /frontend/dist /usr/share/nginx/html

EXPOSE 80
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
