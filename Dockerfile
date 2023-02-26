FROM nginx:1.19.0-alpine AS release

COPY ./prod /usr/share/nginx/html

COPY --chown=0:0 --from=base /src/_infra/nginx/default.conf /etc/nginx/conf.d/default.conf
