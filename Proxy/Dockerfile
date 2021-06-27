FROM nginx:alpine
RUN apk add --no-cache certbot

COPY 5xx /usr/share/nginx/html/5xx/

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

RUN mkdir /var/lib/certbot

ENTRYPOINT [ "../entrypoint.sh" ]
