#!/bin/sh
certbot certonly --standalone -d zemis.com.ua,www.zemis.com.ua --email malsimushkka@gmail.com -n --agree-tos --expand

/usr/sbin/nginx -g "daemon off;"
