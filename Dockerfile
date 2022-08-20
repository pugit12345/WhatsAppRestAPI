FROM node:alpine
WORKDIR /app
COPY package.json /app
RUN npm install
RUN npm install express
RUN npm i whatsapp-web.js
RUN npm i qrcode-terminal
RUN npm install ip
RUN npm install  chromium
RUN wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
RUN sudo yum  install ./google-chrome-stable_current_amd64.deb
COPY . /app
CMD node SendMessage.js
