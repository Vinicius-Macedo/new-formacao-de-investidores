FROM nginx:1.19.0-alpine AS release

COPY ./dev/formacao-de-investidores-files/out /usr/share/nginx/html/formacao-de-investidores
COPY ./dev/real-time-files/out /usr/share/nginx/html/real-time

# COPY ./out /usr/share/nginx/html/real-time
COPY ./_infra/nginx/default.conf /etc/nginx/conf.d/default.conf
