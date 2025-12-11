FROM node:24-alpine
ENV TZ="UTC"
RUN apk update && apk add --no-cache python3 build-base tzdata \
    && cp /usr/share/zoneinfo/$TZ /etc/localtime \
    && npm install -g pnpm
