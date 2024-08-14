FROM node:18

WORKDIR /app

COPY package*.json .
RUN npm install --omit=dev --verbose

COPY ./src ./src

EXPOSE 3000

CMD ["npm", "start"]
