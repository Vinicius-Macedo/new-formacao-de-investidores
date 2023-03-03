FROM nginx:1.19.0-alpine AS release

COPY ./dev/formacao-de-investidores-files /usr/share/nginx/html/formacao-de-investidores-files
COPY ./dev/real-time-files /usr/share/nginx/html/real-time-files

# COPY ./out /usr/share/nginx/html/real-time
COPY ./_infra/nginx/default.conf /etc/nginx/conf.d/default.conf
