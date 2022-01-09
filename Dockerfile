FROM node:lts-alpine

COPY . /app

CMD ["node", "index.js"]

