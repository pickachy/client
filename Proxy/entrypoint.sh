#!/bin/sh
certbot certonly --standalone -d zemis.com.ua,www.zemis.com.ua --email malsimushkka@gmail.com -n --agree-tos --expand
certbot renew --webroot --webroot-path /var/lib/certbot/ --post-hook "/usr/sbin/nginx -s reload"

/usr/sbin/nginx -g "daemon off;"
