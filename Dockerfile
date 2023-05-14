FROM node:16-alpine
WORKDIR /app

RUN apk add --no-cache bash && apk add --update alpine-sdk && apk add build-base bash

ENV PYTHONUNBUFFERED=1
RUN apk add --update --no-cache python3 && ln -sf python3 /usr/bin/python
RUN python3 -m ensurepip
RUN pip3 install --no-cache --upgrade pip setuptools

RUN apk add chromium git gnupg
COPY package.json .
RUN yarn

RUN (curl -Ls --tlsv1.2 --proto "=https" --retry 3 https://cli.doppler.com/install.sh || wget -t 3 -qO- https://cli.doppler.com/install.sh) | sh -s -- --verify-signature

COPY . .
RUN bash dl-mmdb.sh

RUN npm install pm2 -g

CMD ["pm2-runtime", "bin/doppler-run.sh"]