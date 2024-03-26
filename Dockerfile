FROM node:21-alpine
RUN mkdir -p /app
WORKDIR /app

EXPOSE 3000
EXPOSE 9229