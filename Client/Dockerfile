FROM node:14-alpine as build
WORKDIR /app
COPY ./package.json ./package-lock.json /app/
RUN npm install
COPY . /app

EXPOSE 4000

ENTRYPOINT ["npm", "run", "prerender"]
CMD ["npm", "run", "serve:ssr"]
