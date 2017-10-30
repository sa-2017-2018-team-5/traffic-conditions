FROM node
MAINTAINER Antoine Aubé (aube.antoine@protonmail.com)

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 9090

CMD ["npm", "start"]
