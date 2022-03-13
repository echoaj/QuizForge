FROM nginx:alpine
COPY . /usr/share/nginx/html
# Depricated
# MAINTAINER Alex 
LABEL org.opencontainers.image.authors="Alex"
LABEL description="App allowing users to create quiz"
