FROM node:21-alpine3.18
WORKDIR /app
COPY out .
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "."]
