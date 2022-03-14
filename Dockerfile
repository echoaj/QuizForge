FROM nginx:1.21.6

COPY default.conf.template /etc/nginx/conf.d/default.conf.template
COPY nginx.conf /etc/nginx/nginx.conf
COPY . /usr/share/nginx/html

CMD /bin/bash -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'

# Depricated
# MAINTAINER Alex 
LABEL org.opencontainers.image.authors="Alex"
LABEL description="App allowing users to create quiz"

