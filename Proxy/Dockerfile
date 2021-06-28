FROM nginx:alpine
RUN apk add --no-cache certbot

COPY errors /usr/share/nginx/html/errors/

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

RUN mkdir /var/lib/certbot

ENTRYPOINT [ "../entrypoint.sh" ]
