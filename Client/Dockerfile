FROM node:14-alpine as build
WORKDIR /app
COPY ./package.json ./package-lock.json /app/
RUN npm install
COPY . /app
RUN npm run prerender

FROM node:14-alpine
WORKDIR /app
COPY --from=build /app/package.json /app
COPY --from=build /app/dist/zemis/browser /app/dist/zemis/browser
COPY --from=build /app/dist/zemis/server /app/dist/zemis/server

EXPOSE 4000

CMD ["npm", "run", "serve:ssr"]
