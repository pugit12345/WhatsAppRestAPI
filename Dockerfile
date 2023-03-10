FROM node:alpine
WORKDIR /app
COPY package.json /app
COPY TestMe.js /app
RUN npm install
RUN npm install express
RUN npm i whatsapp-web.js
RUN npm i qrcode-terminal
RUN npm install ip
RUN npm i puppeteer
RUN npm install  chromium
RUN npm  install locate-chrome
COPY . /app
#CMD node SendMessage.js
CMD node TestMe.js
