FROM node:10.15-alpine

EXPOSE 3000

VOLUME /app

WORKDIR /app

RUN apk update && apk upgrade && \
  apk add --no-cache \
  bash \
  gzip \
  tar \
  rsync \
  git \
  openssh \
  rpm \
  make \
  g++ \
  python \
  perl \
  file

# make a docker image from this Dockerfile
# docker build -t bluebird .

# webpack dev server startup
# docker run -p 3000:3000 -v $PWD:/app -it --rm bluebird make start
# docker run -p 3000:3000 -v $PWD:/app -it --rm bluebird yarn install; yarn start
# docker run -p 3000:3000 -v $PWD:/app -it --rm bluebird /bin/bash -c "make BRAND=bluehost start"
# docker run -p 3001:3000 -v $PWD:/app -it --rm bluebird /bin/bash -c "make BRAND=justhost start"
# docker run -p 3002:3000 -v $PWD:/app -it --rm bluebird /bin/bash -c "make BRAND=hostmonster start"
# docker run -p 3003:3000 -v $PWD:/app -it --rm bluebird /bin/bash -c "make BRAND=fastdomain start"

# unit test the things
# docker run -v $PWD:/app -it --rm bluebird /bin/bash -c "make test"

# download node modules
# docker run -v $PWD:/app --rm bluebird yarn install

# bashing into docker from your alpha (using hosts network)
# docker run -v $PWD:/app -it --rm --net="host" bluebird /bin/bash
