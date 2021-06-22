FROM nginx:alpine
RUN apk add --no-cache certbot

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

RUN mkdir /var/lib/certbot

ENTRYPOINT [ "../entrypoint.sh" ]
