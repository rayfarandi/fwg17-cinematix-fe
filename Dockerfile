FROM node:lts-alpine

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 7771

CMD ["npm", "run", "dev"]