FROM node:alpine
WORKDIR /app
COPY package.json /app
RUN npm install
RUN npm install express
RUN npm i whatsapp-web.js
RUN npm i qrcode-terminal
RUN npm install ip
COPY . /app
CMD node SendMessage.js
