FROM debian:bookworm-slim

LABEL maintainer="Manuel Martinez <sina@serverscstrike.com>"

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update \
    && apt-get install --no-install-recommends -y \
    ca-certificates \
    curl \
    git \
    build-essential \
    && curl -fsSL https://deb.nodesource.com/setup_24.x | bash - \
    && apt-get install -y nodejs && npm install -g pnpm \
    && rm -rf /var/lib/apt/lists/* \
    && adduser --disabled-password --home /home/node node

USER node

CMD ["sleep", "infinity"]
