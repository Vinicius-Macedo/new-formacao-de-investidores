FROM nginx:1.19.0-alpine AS release

COPY ./prod /usr/share/nginx/html
# COPY ./out /usr/share/nginx/html/real-time
COPY ./_infra/nginx/default.conf /etc/nginx/conf.d/default.conf
