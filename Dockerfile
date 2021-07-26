FROM node:14-alpine as build

WORKDIR /app

COPY ./package.json ./package-lock.json /app/
RUN npm install

COPY . /app

EXPOSE 4000

RUN ["chmod", "+x", "entrypoint.sh"]
ENTRYPOINT ["./entrypoint.sh"]
